-- Vize üniteleri (1-9) açılır; çıkmış vize soruları soru havuzunda görünür
UPDATE settings SET value = '9' WHERE key = 'current_week' AND CAST(value AS INTEGER) < 9;
