import os
import sys
from pypdf import PdfReader, PdfWriter


def compress_all_binaries(target_folder="papers"):
    """Scans your localized directory asset repository and compresses heavy binaries."""
    if not os.path.exists(target_folder):
        print(f"❌ Error: Directory '{target_folder}' does not exist.")
        return

    print("🔄 Scanning folder workspace for target PDF question documents...")
    files = [f for f in os.listdir(target_folder) if f.endswith(".pdf")]

    if not files:
        print("💡 Workspace clean. No uncompressed assets located.")
        return

    for target_file in files:
        full_path = os.path.join(target_folder, target_file)

        # Skip files that have already run through optimization flags
        if target_file.endswith("-optimized.pdf"):
            continue

        reader = PdfReader(full_path)
        writer = PdfWriter()

        print(f"⚙️ Running compression threads over: {target_file}...")

        for page in reader.pages:
            page.compress_content_streams()  # Triggers raw binary streams data reduction
            writer.add_page(page)

        output_filename = os.path.join(
            target_folder, f"{os.path.splitext(target_file)[0]}-optimized.pdf"
        )

        with open(output_filename, "wb") as out_stream:
            writer.write(out_stream)

        initial_mb = os.path.getsize(full_path) / (1024 * 1024)
        final_mb = os.path.getsize(output_filename) / (1024 * 1024)

        print(
            f"✅ Success! Shrinkage factor complete: {initial_mb:.2f}MB ➔ {final_mb:.2f}MB"
        )


if __name__ == "__main__":
    compress_all_binaries()
