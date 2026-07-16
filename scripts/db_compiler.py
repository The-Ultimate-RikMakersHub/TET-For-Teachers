import os
import sqlite3
import xml.etree.ElementTree as ET


def compile_database_to_xml():
    db_path = os.path.join("data", "ctet_matrix.db")
    output_xml = "data.xml"

    if not os.path.exists(db_path):
        print(
            f"❌ Fail state: Local relational warehouse binary not located at: {db_path}"
        )
        return

    print("🗄️ Initializing relational database query routines...")
    connection = sqlite3.connect(db_path)
    cursor = connection.cursor()

    try:
        cursor.execute("SELECT * FROM ctet_questions")
        records = cursor.fetchall()

        # Constructing the top structural schema tree node
        root = ET.Element("TetExamVault", compiler="RikMakersHub-v1.0")

        for row in records:
            question_item = ET.SubElement(
                root, "QuestionItem", id=str(row[0]), hots=str(row[7])
            )
            ET.SubElement(question_item, "Subject").text = str(row[1])
            ET.SubElement(question_item, "Text").text = str(row[2])

            options_node = ET.SubElement(question_item, "Options")
            ET.SubElement(options_node, "A").text = str(row[3])
            ET.SubElement(options_node, "B").text = str(row[4])
            ET.SubElement(options_node, "C").text = str(row[5])
            ET.SubElement(options_node, "D").text = str(row[6])

        document_tree = ET.ElementTree(root)
        ET.indent(document_tree, space="    ")  # Beautiful structural indent layouts

        document_tree.write(output_xml, encoding="utf-8", xml_declaration=True)
        print(f"🎉 Success: {output_xml} compiled cleanly from local SQL engine.")

    except sqlite3.OperationalError as err:
        print(f"⚠️ Query execution interrupted. Creating core structure: {err}")
    finally:
        connection.close()


if __name__ == "__main__":
    compile_database_to_xml()
