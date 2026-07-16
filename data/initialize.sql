-- =========================================================
-- 🗄️ RIKMAKERSHUB SQL RELATIONAL CORE WAREHOUSE SCHEMA
-- =========================================================
CREATE TABLE IF NOT EXISTS ctet_question_vault (
    question_id INTEGER PRIMARY KEY,
    subject_track TEXT NOT NULL,
    question_text TEXT NOT NULL,
    correct_option CHAR(1),
    hots_flag INT DEFAULT 0
);
