-- Egger CAD/BIM metadata schema – ProStorage compatible (normalized)

-- Table of distinct products / categories
CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_code TEXT,
    category TEXT
);

-- Main files table, referencing products
CREATE TABLE files (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    path TEXT NOT NULL,          -- relative path inside storage folder
    filename TEXT NOT NULL,      -- base file name
    extension TEXT,              -- file extension (dwg, rvt, jpg, ...)
    size_bytes INTEGER,          -- size in bytes
    product_id INTEGER,          -- FK to products.id (nullable)
    source_url TEXT,             -- URL of source ZIP / download page
    FOREIGN KEY(product_id) REFERENCES products(id)
);

-- Full‑text search virtual table for fast filename/path queries
CREATE VIRTUAL TABLE files_fts USING fts5(
    filename,
    path,
    content='files',
    content_rowid='id'
);

-- Indexes for common filters
CREATE INDEX idx_files_extension ON files (extension);
CREATE INDEX idx_files_size ON files (size_bytes);
CREATE INDEX idx_files_product ON files (product_id);

-- Views for convenient access
CREATE VIEW v_files AS
SELECT f.id,
       f.filename,
       f.extension,
       f.size_bytes,
       p.product_code,
       p.category,
       f.source_url,
       f.path AS relative_path
FROM files f
LEFT JOIN products p ON f.product_id = p.id;

-- Example queries (to be used in ProStorage)
-- 1. List all DWG files > 10 MB
-- SELECT * FROM v_files WHERE extension = 'dwg' AND size_bytes > 10*1024*1024;
-- 2. Count files per category
-- SELECT p.category, COUNT(*) AS cnt FROM v_files v JOIN products p ON v.product_id = p.id GROUP BY p.category;
