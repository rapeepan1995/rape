// Complete 250-Question Bank for Grade 7 Thai Entrance Exam with SVG Diagrams
const MASTER_QUESTION_BANK = [
  {
    "id": "m_1",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "ห.ร.ม. และ ค.ร.น. (นาฬิกาปลุก)",
    "stem": "นาฬิกาปลุก 3 เรือน เรือนแรกปลุกทุก 15 นาที เรือนสองทุก 20 นาที เรือนสามทุก 30 นาที ถ้าปลุกพร้อมกันเวลา 08:00 น. จะปลุกพร้อมกันครั้งต่อไปเวลาใด?",
    "choices": [
      {
        "text": "08:45 น.",
        "isCorrect": false
      },
      {
        "text": "09:00 น.",
        "isCorrect": true
      },
      {
        "text": "09:30 น.",
        "isCorrect": false
      },
      {
        "text": "10:00 น.",
        "isCorrect": false
      }
    ],
    "metaphor": "คิดเหมือนคน 3 คนวิ่งรอบสนาม! ใครจะวนมาเจอกันที่จุดเริ่มต้นพร้อมกันเมื่อไหร่ ให้หา ค.ร.น. ท่องแม่ 30 ดูสิ: 30, 60... เจอกันที่ 60 นาทีพอดี!",
    "stepsMath": "1. หา ค.ร.น. ของ 15, 20, 30 นาที ได้เท่ากับ 60 นาที (1 ชั่วโมง)<br>2. นำเวลา 08:00 + 1:00 = 09:00 น.",
    "proShortcut": "ดูเลขมากสุดคือ 30 ท่องแม่ 30 ➔ 60 นาที (15 และ 20 หารลงตัวทั้งคู่) ตอบ 09:00 น. ใน 5 วิ!",
    "ttsStem": "นาฬิกาปลุกสามเรือน ปลุกทุก สิบห้า นาที, ยี่สิบ นาที, และ สามสิบ นาที, ปลุกพร้อมกันเวลา แปดโมงเช้า, จะปลุกพร้อมกันครั้งต่อไปเวลาใด",
    "ttsExplanation": "หา คอ-รอ-นอ ของ สิบห้า, ยี่สิบ, และสามสิบ, จะได้ หกสิบ นาที, คิดเป็นหนึ่งชั่วโมง, นำไปบวกเพิ่มจากแปดโมงเช้า, จะได้เวลา เก้าโมงเช้า พอดีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_2",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "ห.ร.ม. (แบ่งสิ่งของ/ตัดกระดาษ)",
    "stem": "มีเชือก 3 เส้น ยาว 24, 36 และ 48 เซนติเมตร ต้องการตัดแบ่งเป็นเส้นสั้นๆ ให้ยาวเท่ากันโดยไม่เหลือเศษและยาวที่สุด จะตัดได้ยาวเส้นละกี่เซนติเมตร?",
    "choices": [
      {
        "text": "6 เซนติเมตร",
        "isCorrect": false
      },
      {
        "text": "8 เซนติเมตร",
        "isCorrect": false
      },
      {
        "text": "12 เซนติเมตร",
        "isCorrect": true
      },
      {
        "text": "16 เซนติเมตร",
        "isCorrect": false
      }
    ],
    "metaphor": "โจทย์แนว 'แบ่งให้เท่ากันและยาวที่สุด' แปลว่าต้องหาตัวหารร่วมที่มากที่สุด (ห.ร.ม.)!",
    "stepsMath": "หา ห.ร.ม. ของ 24, 36, 48 โดยใช้แม่ 12 หารลงตัวทั้งหมด ➔ ได้ 12 เซนติเมตร",
    "proShortcut": "จำสูตร: 'ตัดแบ่งเท่ากัน ยาวที่สุด = ห.ร.ม.' ➔ 12 หาร 24, 36, 48 ลงตัว ตอบ 12 เลย!",
    "ttsStem": "มีเชือกสามเส้น ยาว ยี่สิบสี่, สามสิบหก, และ สี่สิบแปด เซนติเมตร, ตัดแบ่งให้ยาวที่สุดเท่าๆ กันโดยไม่เหลือเศษ, จะได้ยาวเส้นละกี่เซนติเมตร",
    "ttsExplanation": "เจอคำว่า แบ่งเท่าๆ กันและยาวที่สุด, ให้หา หอ-รอ-มอ, เลขที่หาร ยี่สิบสี่, สามสิบหก, และสี่สิบแปด ลงตัวมากที่สุดคือ สิบสอง, ตอบ สิบสอง เซนติเมตรครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 340 120\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"340\" height=\"120\" fill=\"#F0FDF4\" rx=\"12\" stroke=\"#86EFAC\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"18\" font-size=\"11\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">ตัดแบ่งท่อนละ 12 ซม. เท่ากันทุกเส้นพอดีเป๊ะ!</text>\n          <!-- Rope 24 cm (2 pieces) -->\n          <text x=\"15\" y=\"42\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">24 ซม.</text>\n          <rect x=\"65\" y=\"30\" width=\"70\" height=\"16\" fill=\"#38BDF8\" rx=\"3\"/>\n          <text x=\"100\" y=\"42\" font-size=\"9\" fill=\"#0369A1\" text-anchor=\"middle\">12 ซม.</text>\n          <rect x=\"140\" y=\"30\" width=\"70\" height=\"16\" fill=\"#38BDF8\" rx=\"3\"/>\n          <text x=\"175\" y=\"42\" font-size=\"9\" fill=\"#0369A1\" text-anchor=\"middle\">12 ซม.</text>\n          <!-- Rope 36 cm (3 pieces) -->\n          <text x=\"15\" y=\"70\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">36 ซม.</text>\n          <rect x=\"65\" y=\"58\" width=\"70\" height=\"16\" fill=\"#A855F7\" rx=\"3\"/>\n          <rect x=\"140\" y=\"58\" width=\"70\" height=\"16\" fill=\"#A855F7\" rx=\"3\"/>\n          <rect x=\"215\" y=\"58\" width=\"70\" height=\"16\" fill=\"#A855F7\" rx=\"3\"/>\n          <!-- Rope 48 cm (4 pieces) -->\n          <text x=\"15\" y=\"98\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">48 ซม.</text>\n          <rect x=\"65\" y=\"86\" width=\"55\" height=\"16\" fill=\"#FBBF24\" rx=\"3\"/>\n          <rect x=\"123\" y=\"86\" width=\"55\" height=\"16\" fill=\"#FBBF24\" rx=\"3\"/>\n          <rect x=\"181\" y=\"86\" width=\"55\" height=\"16\" fill=\"#FBBF24\" rx=\"3\"/>\n          <rect x=\"239\" y=\"86\" width=\"55\" height=\"16\" fill=\"#FBBF24\" rx=\"3\"/>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 340 120\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"340\" height=\"120\" fill=\"#F0FDF4\" rx=\"12\" stroke=\"#86EFAC\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"18\" font-size=\"11\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">ตัดแบ่งท่อนละ 12 ซม. เท่ากันทุกเส้นพอดีเป๊ะ!</text>\n          <!-- Rope 24 cm (2 pieces) -->\n          <text x=\"15\" y=\"42\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">24 ซม.</text>\n          <rect x=\"65\" y=\"30\" width=\"70\" height=\"16\" fill=\"#38BDF8\" rx=\"3\"/>\n          <text x=\"100\" y=\"42\" font-size=\"9\" fill=\"#0369A1\" text-anchor=\"middle\">12 ซม.</text>\n          <rect x=\"140\" y=\"30\" width=\"70\" height=\"16\" fill=\"#38BDF8\" rx=\"3\"/>\n          <text x=\"175\" y=\"42\" font-size=\"9\" fill=\"#0369A1\" text-anchor=\"middle\">12 ซม.</text>\n          <!-- Rope 36 cm (3 pieces) -->\n          <text x=\"15\" y=\"70\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">36 ซม.</text>\n          <rect x=\"65\" y=\"58\" width=\"70\" height=\"16\" fill=\"#A855F7\" rx=\"3\"/>\n          <rect x=\"140\" y=\"58\" width=\"70\" height=\"16\" fill=\"#A855F7\" rx=\"3\"/>\n          <rect x=\"215\" y=\"58\" width=\"70\" height=\"16\" fill=\"#A855F7\" rx=\"3\"/>\n          <!-- Rope 48 cm (4 pieces) -->\n          <text x=\"15\" y=\"98\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">48 ซม.</text>\n          <rect x=\"65\" y=\"86\" width=\"55\" height=\"16\" fill=\"#FBBF24\" rx=\"3\"/>\n          <rect x=\"123\" y=\"86\" width=\"55\" height=\"16\" fill=\"#FBBF24\" rx=\"3\"/>\n          <rect x=\"181\" y=\"86\" width=\"55\" height=\"16\" fill=\"#FBBF24\" rx=\"3\"/>\n          <rect x=\"239\" y=\"86\" width=\"55\" height=\"16\" fill=\"#FBBF24\" rx=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_3",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "ร้อยละ: ลดราคา 2 ต่อ",
    "stem": "เสื้อตัวหนึ่งติดป้ายราคา 800 บาท ร้านค้าลดราคา 20% และถ้าจ่ายเงินสดลดเพิ่มอีก 10% จากราคาที่ลดแล้ว ต้องจ่ายเงินสดกี่บาท?",
    "choices": [
      {
        "text": "560 บาท",
        "isCorrect": false
      },
      {
        "text": "576 บาท",
        "isCorrect": true
      },
      {
        "text": "600 บาท",
        "isCorrect": false
      },
      {
        "text": "640 บาท",
        "isCorrect": false
      }
    ],
    "metaphor": "ระวังโดนหลอก! ไม่ใช่เอา 20% + 10% = 30% นะ! ต้องลด 20% เหลือก้อนแรกก่อน แล้วค่อยลดเงินสดต่อจากก้อนนั้น!",
    "stepsMath": "1. ลด 20% ➔ จ่าย 80% = 800 × 0.8 = 640 บาท<br>2. ลดเงินสดอีก 10% ➔ จ่าย 90% ของ 640 = 640 × 0.9 = 576 บาท",
    "proShortcut": "สูตรคูณรวดเดียว: 800 × 0.8 × 0.9 = 800 × 0.72 = 576 บาท!",
    "ttsStem": "เสื้อติดป้าย แปดร้อยบาท, ลดราคา ยี่สิบเปอร์เซ็นต์, และลดเงินสดเพิ่มอีก สิบเปอร์เซ็นต์ จากราคาที่ลดแล้ว, ต้องจ่ายเงินสดกี่บาท",
    "ttsExplanation": "คิดทีละขั้น, ลดรอบแรก ยี่สิบเปอร์เซ็นต์ เหลือ หกร้อยสี่สิบบาท, ลดเงินสดอีกสิบเปอร์เซ็นต์จากหกร้อยสี่สิบ จะลดไป หกสิบสี่บาท, เหลือจ่ายจริง ห้าร้อยเจ็ดสิบหก บาทครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 340 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"340\" height=\"110\" fill=\"#FEF2F2\" rx=\"12\" stroke=\"#FECACA\" stroke-width=\"1.5\"/>\n          <!-- Step 1 Tag -->\n          <rect x=\"20\" y=\"25\" width=\"80\" height=\"60\" rx=\"8\" fill=\"#F87171\"/>\n          <text x=\"60\" y=\"48\" font-size=\"10\" fill=\"#FFF\" text-anchor=\"middle\">ป้ายราคา</text>\n          <text x=\"60\" y=\"68\" font-size=\"13\" font-weight=\"bold\" fill=\"#FFF\" text-anchor=\"middle\">800 บ.</text>\n          <!-- Arrow 1 -->\n          <path d=\"M 105 55 L 125 55\" stroke=\"#991B1B\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/>\n          <text x=\"115\" y=\"45\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\" text-anchor=\"middle\">-20%</text>\n          <!-- Step 2 Tag -->\n          <rect x=\"130\" y=\"25\" width=\"80\" height=\"60\" rx=\"8\" fill=\"#FBBF24\"/>\n          <text x=\"170\" y=\"48\" font-size=\"10\" fill=\"#78350F\" text-anchor=\"middle\">เหลือรอบแรก</text>\n          <text x=\"170\" y=\"68\" font-size=\"13\" font-weight=\"bold\" fill=\"#78350F\" text-anchor=\"middle\">640 บ.</text>\n          <!-- Arrow 2 -->\n          <path d=\"M 215 55 L 235 55\" stroke=\"#991B1B\" stroke-width=\"2\"/>\n          <text x=\"225\" y=\"45\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\" text-anchor=\"middle\">-10%</text>\n          <!-- Final Price Tag -->\n          <rect x=\"240\" y=\"20\" width=\"85\" height=\"70\" rx=\"8\" fill=\"#10B981\" stroke=\"#047857\" stroke-width=\"2\"/>\n          <text x=\"282\" y=\"42\" font-size=\"10\" fill=\"#FFF\" text-anchor=\"middle\">จ่ายจริงเงินสด</text>\n          <text x=\"282\" y=\"66\" font-size=\"15\" font-weight=\"bold\" fill=\"#FFF\" text-anchor=\"middle\">576 บ.</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 340 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"340\" height=\"110\" fill=\"#FEF2F2\" rx=\"12\" stroke=\"#FECACA\" stroke-width=\"1.5\"/>\n          <!-- Step 1 Tag -->\n          <rect x=\"20\" y=\"25\" width=\"80\" height=\"60\" rx=\"8\" fill=\"#F87171\"/>\n          <text x=\"60\" y=\"48\" font-size=\"10\" fill=\"#FFF\" text-anchor=\"middle\">ป้ายราคา</text>\n          <text x=\"60\" y=\"68\" font-size=\"13\" font-weight=\"bold\" fill=\"#FFF\" text-anchor=\"middle\">800 บ.</text>\n          <!-- Arrow 1 -->\n          <path d=\"M 105 55 L 125 55\" stroke=\"#991B1B\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/>\n          <text x=\"115\" y=\"45\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\" text-anchor=\"middle\">-20%</text>\n          <!-- Step 2 Tag -->\n          <rect x=\"130\" y=\"25\" width=\"80\" height=\"60\" rx=\"8\" fill=\"#FBBF24\"/>\n          <text x=\"170\" y=\"48\" font-size=\"10\" fill=\"#78350F\" text-anchor=\"middle\">เหลือรอบแรก</text>\n          <text x=\"170\" y=\"68\" font-size=\"13\" font-weight=\"bold\" fill=\"#78350F\" text-anchor=\"middle\">640 บ.</text>\n          <!-- Arrow 2 -->\n          <path d=\"M 215 55 L 235 55\" stroke=\"#991B1B\" stroke-width=\"2\"/>\n          <text x=\"225\" y=\"45\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\" text-anchor=\"middle\">-10%</text>\n          <!-- Final Price Tag -->\n          <rect x=\"240\" y=\"20\" width=\"85\" height=\"70\" rx=\"8\" fill=\"#10B981\" stroke=\"#047857\" stroke-width=\"2\"/>\n          <text x=\"282\" y=\"42\" font-size=\"10\" fill=\"#FFF\" text-anchor=\"middle\">จ่ายจริงเงินสด</text>\n          <text x=\"282\" y=\"66\" font-size=\"15\" font-weight=\"bold\" fill=\"#FFF\" text-anchor=\"middle\">576 บ.</text>\n        </svg>\n        "
  },
  {
    "id": "m_4",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "ร้อยละ: กำไรและขาดทุน",
    "stem": "พ่อค้าซื้อพัดลมมาราคา 600 บาท ต้องการขายให้ได้กำไร 25% จะต้องตั้งราคาขายพัดลมเครื่องนี้กี่บาท?",
    "choices": [
      {
        "text": "720 บาท",
        "isCorrect": false
      },
      {
        "text": "750 บาท",
        "isCorrect": true
      },
      {
        "text": "780 บาท",
        "isCorrect": false
      },
      {
        "text": "800 บาท",
        "isCorrect": false
      }
    ],
    "metaphor": "อยากได้กำไร 25% แปลว่าจากทุน 100 ต้องขาย 125 เอาทุนไปคูณ 1.25 ได้เลย!",
    "stepsMath": "ราคาขาย = ทุน × (125/100) = 600 × 1.25 = 750 บาท (หรือคิดกำไร 600 × 0.25 = 150 บาท แล้วบวกทุน)",
    "proShortcut": "กำไร 25% คือ 1 ใน 4 ➔ เอา 600 ÷ 4 = 150 บาท บวกทุน 600 = 750 บาท!",
    "ttsStem": "ซื้อพัดลมมา หกร้อยบาท, ต้องการขายให้ได้กำไร ยี่สิบห้าเปอร์เซ็นต์, จะต้องขายกี่บาท",
    "ttsExplanation": "กำไรยี่สิบห้าเปอร์เซ็นต์, คิดเป็นหนึ่งในสี่ของหกร้อย คือ หนึ่งร้อยห้าสิบบาท, นำไปบวกกับทุนหกร้อย, จะต้องขาย เจ็ดร้อยห้าสิบ บาทครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 340 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"340\" height=\"110\" fill=\"#FEF2F2\" rx=\"12\" stroke=\"#FECACA\" stroke-width=\"1.5\"/>\n          <!-- Step 1 Tag -->\n          <rect x=\"20\" y=\"25\" width=\"80\" height=\"60\" rx=\"8\" fill=\"#F87171\"/>\n          <text x=\"60\" y=\"48\" font-size=\"10\" fill=\"#FFF\" text-anchor=\"middle\">ป้ายราคา</text>\n          <text x=\"60\" y=\"68\" font-size=\"13\" font-weight=\"bold\" fill=\"#FFF\" text-anchor=\"middle\">800 บ.</text>\n          <!-- Arrow 1 -->\n          <path d=\"M 105 55 L 125 55\" stroke=\"#991B1B\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/>\n          <text x=\"115\" y=\"45\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\" text-anchor=\"middle\">-20%</text>\n          <!-- Step 2 Tag -->\n          <rect x=\"130\" y=\"25\" width=\"80\" height=\"60\" rx=\"8\" fill=\"#FBBF24\"/>\n          <text x=\"170\" y=\"48\" font-size=\"10\" fill=\"#78350F\" text-anchor=\"middle\">เหลือรอบแรก</text>\n          <text x=\"170\" y=\"68\" font-size=\"13\" font-weight=\"bold\" fill=\"#78350F\" text-anchor=\"middle\">640 บ.</text>\n          <!-- Arrow 2 -->\n          <path d=\"M 215 55 L 235 55\" stroke=\"#991B1B\" stroke-width=\"2\"/>\n          <text x=\"225\" y=\"45\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\" text-anchor=\"middle\">-10%</text>\n          <!-- Final Price Tag -->\n          <rect x=\"240\" y=\"20\" width=\"85\" height=\"70\" rx=\"8\" fill=\"#10B981\" stroke=\"#047857\" stroke-width=\"2\"/>\n          <text x=\"282\" y=\"42\" font-size=\"10\" fill=\"#FFF\" text-anchor=\"middle\">จ่ายจริงเงินสด</text>\n          <text x=\"282\" y=\"66\" font-size=\"15\" font-weight=\"bold\" fill=\"#FFF\" text-anchor=\"middle\">576 บ.</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 340 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"340\" height=\"110\" fill=\"#FEF2F2\" rx=\"12\" stroke=\"#FECACA\" stroke-width=\"1.5\"/>\n          <!-- Step 1 Tag -->\n          <rect x=\"20\" y=\"25\" width=\"80\" height=\"60\" rx=\"8\" fill=\"#F87171\"/>\n          <text x=\"60\" y=\"48\" font-size=\"10\" fill=\"#FFF\" text-anchor=\"middle\">ป้ายราคา</text>\n          <text x=\"60\" y=\"68\" font-size=\"13\" font-weight=\"bold\" fill=\"#FFF\" text-anchor=\"middle\">800 บ.</text>\n          <!-- Arrow 1 -->\n          <path d=\"M 105 55 L 125 55\" stroke=\"#991B1B\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/>\n          <text x=\"115\" y=\"45\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\" text-anchor=\"middle\">-20%</text>\n          <!-- Step 2 Tag -->\n          <rect x=\"130\" y=\"25\" width=\"80\" height=\"60\" rx=\"8\" fill=\"#FBBF24\"/>\n          <text x=\"170\" y=\"48\" font-size=\"10\" fill=\"#78350F\" text-anchor=\"middle\">เหลือรอบแรก</text>\n          <text x=\"170\" y=\"68\" font-size=\"13\" font-weight=\"bold\" fill=\"#78350F\" text-anchor=\"middle\">640 บ.</text>\n          <!-- Arrow 2 -->\n          <path d=\"M 215 55 L 235 55\" stroke=\"#991B1B\" stroke-width=\"2\"/>\n          <text x=\"225\" y=\"45\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\" text-anchor=\"middle\">-10%</text>\n          <!-- Final Price Tag -->\n          <rect x=\"240\" y=\"20\" width=\"85\" height=\"70\" rx=\"8\" fill=\"#10B981\" stroke=\"#047857\" stroke-width=\"2\"/>\n          <text x=\"282\" y=\"42\" font-size=\"10\" fill=\"#FFF\" text-anchor=\"middle\">จ่ายจริงเงินสด</text>\n          <text x=\"282\" y=\"66\" font-size=\"15\" font-weight=\"bold\" fill=\"#FFF\" text-anchor=\"middle\">576 บ.</text>\n        </svg>\n        "
  },
  {
    "id": "m_5",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เรขาคณิต: พื้นที่แรเงาวงกลมแนบในจัตุรัส",
    "stem": "สี่เหลี่ยมจัตุรัสยาวด้านละ 14 ซม. มีวงกลมแนบในพอดี พื้นที่ส่วนที่แรเงาที่มุมทั้ง 4 มุมมีค่ากี่ตารางเซนติเมตร? (π ≈ 22/7)",
    "choices": [
      {
        "text": "42 ตร.ซม.",
        "isCorrect": true
      },
      {
        "text": "56 ตร.ซม.",
        "isCorrect": false
      },
      {
        "text": "84 ตร.ซม.",
        "isCorrect": false
      },
      {
        "text": "154 ตร.ซม.",
        "isCorrect": false
      }
    ],
    "metaphor": "เหมือนแผ่นขนมปังแยมสี่เหลี่ยม โดนแก้วน้ำกลมๆ ตัดตรงกลางออกไป ที่เหลือติดมุม 4 มุมคือพื้นที่แรเงา!",
    "stepsMath": "1. พ.ท. สี่เหลี่ยม = 14 × 14 = 196 ตร.ซม.<br>2. พ.ท. วงกลม (r=7) = (22/7) × 7 × 7 = 154 ตร.ซม.<br>3. แรเงา = 196 - 154 = 42 ตร.ซม.",
    "proShortcut": "สูตรลัด: (3/14) × ด้าน² = (3/14) × 196 = 42 ตร.ซม. ใน 5 วิ!",
    "ttsStem": "สี่เหลี่ยมจัตุรัสยาวด้านละ สิบสี่ เซนติเมตร, มีวงกลมแนบในพอดี, พื้นที่ส่วนที่แรเงาที่มุมทั้งสี่มุมมีค่ากี่ตารางเซนติเมตร",
    "ttsExplanation": "พื้นที่สี่เหลี่ยม หนึ่งร้อยเก้าสิบหก, ลบพื้นที่วงกลม หนึ่งร้อยห้าสิบสี่, เหลือพื้นที่แรเงา สี่สิบสอง ตารางเซนติเมตรครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 120\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"280\" height=\"120\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FDE68A\" stroke-width=\"1.5\"/>\n          <!-- Square Bread -->\n          <rect x=\"20\" y=\"15\" width=\"90\" height=\"90\" fill=\"#FDBA74\" stroke=\"#EA580C\" stroke-width=\"2\" rx=\"4\"/>\n          <circle cx=\"65\" cy=\"60\" r=\"45\" fill=\"#FFFFFF\" stroke=\"#3B82F6\" stroke-width=\"2\"/>\n          <text x=\"65\" y=\"64\" font-size=\"10\" font-weight=\"bold\" fill=\"#3B82F6\" text-anchor=\"middle\">ตัดแก้วน้ำ</text>\n          <!-- Equal sign -->\n          <text x=\"130\" y=\"65\" font-size=\"20\" font-weight=\"bold\" fill=\"#9A3412\" text-anchor=\"middle\">=</text>\n          <!-- Corner jam remnants -->\n          <rect x=\"155\" y=\"15\" width=\"90\" height=\"90\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.5\" rx=\"4\"/>\n          <!-- 4 orange corners -->\n          <path d=\"M 155 15 L 200 15 A 45 45 0 0 0 155 60 Z\" fill=\"#F97316\"/>\n          <path d=\"M 245 15 L 200 15 A 45 45 0 0 1 245 60 Z\" fill=\"#F97316\"/>\n          <path d=\"M 155 105 L 200 105 A 45 45 0 0 1 155 60 Z\" fill=\"#F97316\"/>\n          <path d=\"M 245 105 L 200 105 A 45 45 0 0 0 245 60 Z\" fill=\"#F97316\"/>\n          <text x=\"200\" y=\"65\" font-size=\"11\" font-weight=\"bold\" fill=\"#C2410C\" text-anchor=\"middle\">เหลือ 42 ตร.ซม.</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 120\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"280\" height=\"120\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FDE68A\" stroke-width=\"1.5\"/>\n          <!-- Square Bread -->\n          <rect x=\"20\" y=\"15\" width=\"90\" height=\"90\" fill=\"#FDBA74\" stroke=\"#EA580C\" stroke-width=\"2\" rx=\"4\"/>\n          <circle cx=\"65\" cy=\"60\" r=\"45\" fill=\"#FFFFFF\" stroke=\"#3B82F6\" stroke-width=\"2\"/>\n          <text x=\"65\" y=\"64\" font-size=\"10\" font-weight=\"bold\" fill=\"#3B82F6\" text-anchor=\"middle\">ตัดแก้วน้ำ</text>\n          <!-- Equal sign -->\n          <text x=\"130\" y=\"65\" font-size=\"20\" font-weight=\"bold\" fill=\"#9A3412\" text-anchor=\"middle\">=</text>\n          <!-- Corner jam remnants -->\n          <rect x=\"155\" y=\"15\" width=\"90\" height=\"90\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.5\" rx=\"4\"/>\n          <!-- 4 orange corners -->\n          <path d=\"M 155 15 L 200 15 A 45 45 0 0 0 155 60 Z\" fill=\"#F97316\"/>\n          <path d=\"M 245 15 L 200 15 A 45 45 0 0 1 245 60 Z\" fill=\"#F97316\"/>\n          <path d=\"M 155 105 L 200 105 A 45 45 0 0 1 155 60 Z\" fill=\"#F97316\"/>\n          <path d=\"M 245 105 L 200 105 A 45 45 0 0 0 245 60 Z\" fill=\"#F97316\"/>\n          <text x=\"200\" y=\"65\" font-size=\"11\" font-weight=\"bold\" fill=\"#C2410C\" text-anchor=\"middle\">เหลือ 42 ตร.ซม.</text>\n        </svg>\n        "
  },
  {
    "id": "m_6",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เรขาคณิต: เส้นขนานและมุม",
    "stem": "เส้นตรง 2 เส้นขนานกัน ถูกตัดด้วยเส้นตรงเส้นหนึ่ง ถ้ามุมป้านมีขนาด 130 องศา แล้วมุมแหลมแย้งจะมีขนาดกี่องศา?",
    "choices": [
      {
        "text": "40 องศา",
        "isCorrect": false
      },
      {
        "text": "50 องศา",
        "isCorrect": true
      },
      {
        "text": "60 องศา",
        "isCorrect": false
      },
      {
        "text": "130 องศา",
        "isCorrect": false
      }
    ],
    "metaphor": "เส้นตรงกางแขนได้ 180 องศาเสมอ ถ้าโดนมุมป้านเอาไปแล้ว 130 องศา มุมแหลมที่เหลือก็เอา 180 - 130 ได้เลย!",
    "stepsMath": "มุมแหลม + มุมป้านของเส้นขนาน = 180° ➔ 180° - 130° = 50°",
    "proShortcut": "ท่องเลย: 'มุมแหลม + มุมป้าน = 180°' ➔ ตอบ 50 องศา!",
    "ttsStem": "เส้นตรงสองเส้นขนานกัน, มีมุมป้านขนาด หนึ่งร้อยสามสิบ องศา, แล้วมุมแหลมจะมีขนาดกี่องศา",
    "ttsExplanation": "มุมแหลมกับมุมป้านบนเส้นขนาน รวมกันได้ หนึ่งร้อยแปดสิบ องศาเสมอ, นำ หนึ่งร้อยแปดสิบ ลบ หนึ่งร้อยสามสิบ, ได้ ห้าสิบ องศาครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"300\" height=\"110\" fill=\"#EFF6FF\" rx=\"12\" stroke=\"#BFDBFE\" stroke-width=\"1.5\"/>\n          <!-- Straight line -->\n          <line x1=\"30\" y1=\"60\" x2=\"270\" y2=\"60\" stroke=\"#1E40AF\" stroke-width=\"3\"/>\n          <line x1=\"150\" y1=\"60\" x2=\"80\" y2=\"20\" stroke=\"#DC2626\" stroke-width=\"2.5\"/>\n          <!-- Angle 125 -->\n          <path d=\"M 115 60 A 35 35 0 0 1 125 45\" fill=\"none\" stroke=\"#F59E0B\" stroke-width=\"2.5\"/>\n          <text x=\"110\" y=\"45\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\">125°</text>\n          <!-- Angle 55 -->\n          <path d=\"M 185 60 A 35 35 0 0 0 135 48\" fill=\"none\" stroke=\"#10B981\" stroke-width=\"2.5\"/>\n          <text x=\"175\" y=\"52\" font-size=\"11\" font-weight=\"bold\" fill=\"#047857\">55°</text>\n          <text x=\"150\" y=\"95\" font-size=\"11\" font-weight=\"bold\" fill=\"#1E3A8A\" text-anchor=\"middle\">เส้นตรง 180° = 125° + 55° พอดี!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"300\" height=\"110\" fill=\"#EFF6FF\" rx=\"12\" stroke=\"#BFDBFE\" stroke-width=\"1.5\"/>\n          <!-- Straight line -->\n          <line x1=\"30\" y1=\"60\" x2=\"270\" y2=\"60\" stroke=\"#1E40AF\" stroke-width=\"3\"/>\n          <line x1=\"150\" y1=\"60\" x2=\"80\" y2=\"20\" stroke=\"#DC2626\" stroke-width=\"2.5\"/>\n          <!-- Angle 125 -->\n          <path d=\"M 115 60 A 35 35 0 0 1 125 45\" fill=\"none\" stroke=\"#F59E0B\" stroke-width=\"2.5\"/>\n          <text x=\"110\" y=\"45\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\">125°</text>\n          <!-- Angle 55 -->\n          <path d=\"M 185 60 A 35 35 0 0 0 135 48\" fill=\"none\" stroke=\"#10B981\" stroke-width=\"2.5\"/>\n          <text x=\"175\" y=\"52\" font-size=\"11\" font-weight=\"bold\" fill=\"#047857\">55°</text>\n          <text x=\"150\" y=\"95\" font-size=\"11\" font-weight=\"bold\" fill=\"#1E3A8A\" text-anchor=\"middle\">เส้นตรง 180° = 125° + 55° พอดี!</text>\n        </svg>\n        "
  },
  {
    "id": "m_7",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "สมการ: อายุของบุคคล",
    "stem": "ปัจจุบันแม่มีอายุเป็น 3 เท่าของลูก ถ้าอีก 5 ปีข้างหน้า ผลรวมอายุของแม่และลูกเท่ากับ 58 ปี ปัจจุบันลูกมีอายุกี่ปี?",
    "choices": [
      {
        "text": "10 ปี",
        "isCorrect": false
      },
      {
        "text": "12 ปี",
        "isCorrect": true
      },
      {
        "text": "14 ปี",
        "isCorrect": false
      },
      {
        "text": "16 ปี",
        "isCorrect": false
      }
    ],
    "metaphor": "ตั้งให้ลูกเป็น x แม่เป็น 3x อีก 5 ปี ทั้งสองคนแก่ขึ้นคนละ 5 ปี รวมกันแก่ขึ้น 10 ปี!",
    "stepsMath": "ปัจจุบัน: รวม = 4x. อีก 5 ปี: 4x + 10 = 58 ➔ 4x = 48 ➔ x = 12 ปี",
    "proShortcut": "เอา 58 ลบ 10 (อายุเพิ่มคนละ 5 ปี) เหลือ 48 ปี ➔ แบ่งเป็น 4 ส่วน (แม่ 3 ลูก 1) ➔ 48 ÷ 4 = 12 ปี!",
    "ttsStem": "ปัจจุบันแม่มีอายุเป็น สามเท่า ของลูก, อีกห้าปีข้างหน้า ผลรวมอายุของทั้งคู่เท่ากับ ห้าสิบแปด ปี, ปัจจุบันลูกมีอายุกี่ปี",
    "ttsExplanation": "อีกห้าปี อายุจะเพิ่มขึ้นคนละห้าปี รวมเพิ่มสิบปี, เอา ห้าสิบแปด ลบสิบ เหลือ สี่สิบแปด, แบ่งเป็นสี่ส่วน จะได้อายุลูกเท่ากับ สิบสอง ปีครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_8",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "สมการ: ซื้อของเหรียญและธนบัตร",
    "stem": "มีเหรียญห้าบาทและเหรียญสิบบาทรวมกัน 30 เหรียญ นับเป็นเงินรวมได้ 220 บาท มีเหรียญสิบบาทกี่เหรียญ?",
    "choices": [
      {
        "text": "12 เหรียญ",
        "isCorrect": false
      },
      {
        "text": "14 เหรียญ",
        "isCorrect": true
      },
      {
        "text": "16 เหรียญ",
        "isCorrect": false
      },
      {
        "text": "18 เหรียญ",
        "isCorrect": false
      }
    ],
    "metaphor": "สมมุติให้ทุกเหรียญเป็นเหรียญ 5 บาทให้หมดก่อน! 30 เหรียญจะได้เงิน 150 บาท แต่เงินจริงมี 220 บาท เงินเกินมา 70 บาทเพราะมีเหรียญ 10 บาทแอบอยู่!",
    "stepsMath": "เงินเกินมา = 220 - 150 = 70 บาท ➔ เหรียญ 10 ต่างจากเหรียญ 5 อยู่ 5 บาท ➔ มีเหรียญสิบ = 70 ÷ 5 = 14 เหรียญ",
    "proShortcut": "คิดแบบสมมุติ: ส่วนต่าง 70 ÷ 5 = 14 เหรียญทันที!",
    "ttsStem": "มีเหรียญห้าบาทและเหรียญสิบบาทรวมกัน สามสิบ เหรียญ, คิดเป็นเงิน สองร้อยยี่สิบบาท, มีเหรียญสิบบาทกี่เหรียญ",
    "ttsExplanation": "ถ้าเป็นเหรียญห้าบาททั้งหมด จะได้ หนึ่งร้อยห้าสิบบาท, แต่เงินจริงมี สองร้อยยี่สิบบาท ซึ่งเกินมา เจ็ดสิบบาท, นำเจ็ดสิบ หารด้วยส่วนต่างห้าบาท, จะได้เหรียญสิบบาทเท่ากับ สิบสี่ เหรียญครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_9",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เศษส่วน: การทำงานร่วมกัน",
    "stem": "นาย A ทำงานชิ้นหนึ่งเสร็จใน 6 วัน นาย B ทำงานชิ้นเดียวกันเสร็จใน 3 วัน ถ้าทั้งสองคนช่วยกันทำงานนี้จะเสร็จในกี่วัน?",
    "choices": [
      {
        "text": "2 วัน",
        "isCorrect": true
      },
      {
        "text": "2.5 วัน",
        "isCorrect": false
      },
      {
        "text": "3 วัน",
        "isCorrect": false
      },
      {
        "text": "4.5 วัน",
        "isCorrect": false
      }
    ],
    "metaphor": "ช่วยกันทำ ย่อมเสร็จเร็วกว่าคนเดียวแน่นอน! ต้องเสร็จเร็วกว่า 3 วัน ตัดช้อยส์ 3 วันและ 4.5 วันทิ้งได้เลย!",
    "stepsMath": "ใน 1 วัน A ทำได้ 1/6, B ทำได้ 1/3 (หรือ 2/6) ➔ รวม 1 วันทำได้ 3/6 = 1/2 ของงาน ➔ ทำเสร็จใน 2 วัน",
    "proShortcut": "สูตรลัดช่วยกันทำงาน: (ผลคูณ) ÷ (ผลบวก) = (6 × 3) ÷ (6 + 3) = 18 ÷ 9 = 2 วัน!",
    "ttsStem": "เอ ทำงานเสร็จใน หก วัน, บี ทำงานเสร็จใน สาม วัน, ถ้าช่วยกันทำงานนี้จะเสร็จในกี่วัน",
    "ttsExplanation": "ใช้สูตรลัด ผลคูณหารด้วยผลบวก, หก คูณ สาม ได้ สิบแปด, หารด้วย หก บวก สาม คือ เก้า, สิบแปด หาร เก้า ได้ สอง วันครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_10",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "แบบรูป: ลำดับตัวเลขพจน์ที่ n",
    "stem": "พิจารณาแบบรูปตัวเลข: 4, 7, 10, 13, 16, ... จำนวนที่ 50 ในแบบรูปนี้คือจำนวนใด?",
    "choices": [
      {
        "text": "147",
        "isCorrect": false
      },
      {
        "text": "151",
        "isCorrect": true
      },
      {
        "text": "154",
        "isCorrect": false
      },
      {
        "text": "157",
        "isCorrect": false
      }
    ],
    "metaphor": "สังเกตว่าตัวเลขเพิ่มขึ้นทีละ 3 สม่ำเสมอ เหมือนสูตรคูณแม่ 3!",
    "stepsMath": "สูตรพจน์ที่ n = 3n + 1 ➔ จำนวนที่ 50 = (3 × 50) + 1 = 150 + 1 = 151",
    "proShortcut": "เพิ่มทีละ 3 ➔ เอา 50 × 3 = 150 แล้วดูตัวแรกคือ 4 ซึ่งมากกว่า 3 อยู่ 1 ➔ 150 + 1 = 151!",
    "ttsStem": "แบบรูปตัวเลข สี่, เจ็ด, สิบ, สิบสาม, สิบหก, จำนวนที่ ห้าสิบ คือจำนวนใด",
    "ttsExplanation": "ตัวเลขเพิ่มขึ้นทีละสาม, ให้นำ ห้าสิบ คูณ สาม ได้ หนึ่งร้อยห้าสิบ, แล้วบวกเพิ่มอีกหนึ่ง, ตอบ หนึ่งร้อยห้าสิบเอ็ด ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_11",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เศษส่วนและทศนิยม",
    "stem": "ถังใบหนึ่งมีน้ำอยู่ 3/5 ถัง ตักออกไป 15 ลิตร เหลือน้ำ 1/3 ถัง ถังนี้จุน้ำได้กี่ลิตร?",
    "choices": [
      {
        "text": "45 ลิตร",
        "isCorrect": false
      },
      {
        "text": "50 ลิตร",
        "isCorrect": false
      },
      {
        "text": "56.25 ลิตร",
        "isCorrect": true
      },
      {
        "text": "60 ลิตร",
        "isCorrect": false
      }
    ],
    "metaphor": "ทำส่วนให้เท่ากันก่อนแล้วค่อยบวก จากนั้นเปลี่ยนหารเป็นคูณกลับเศษเป็นส่วน!",
    "stepsMath": "3/5 - 1/3 = 4/15 ของถัง ➔ 4/15 = 15 ลิตร ➔ จุทั้งหมด = (15 × 15)/4 = 56.25 ลิตร",
    "proShortcut": "ตัดทอนตัวเลขเศษส่วนให้เหลือน้อยที่สุดก่อนคูณ!",
    "ttsStem": "ถังใบหนึ่งมีน้ำอยู่ เศษสามส่วนห้า ของถัง ตักออกไปสิบห้าลิตร เหลือน้ำ เศษหนึ่งส่วนสาม ถัง ถังนี้จุน้ำได้กี่ลิตร",
    "ttsExplanation": "คำนวณส่วนต่างได้ ห้าสิบหกจุดสองห้า ลิตรครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_12",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เศษส่วนและทศนิยม",
    "stem": "ผลลัพธ์ของ (3/4 + 1/2) ÷ 5/8 มีค่าเท่ากับข้อใด?",
    "choices": [
      {
        "text": "2",
        "isCorrect": true
      },
      {
        "text": "1.5",
        "isCorrect": false
      },
      {
        "text": "2.5",
        "isCorrect": false
      },
      {
        "text": "3",
        "isCorrect": false
      }
    ],
    "metaphor": "ทำส่วนให้เท่ากันก่อนแล้วค่อยบวก จากนั้นเปลี่ยนหารเป็นคูณกลับเศษเป็นส่วน!",
    "stepsMath": "3/4 + 2/4 = 5/4 ➔ 5/4 ÷ 5/8 = 5/4 × 8/5 = 2",
    "proShortcut": "ตัดทอนตัวเลขเศษส่วนให้เหลือน้อยที่สุดก่อนคูณ!",
    "ttsStem": "ผลลัพธ์ของ เศษสามส่วนสี่ บวก เศษหนึ่งส่วนสอง แล้วหารด้วย เศษห้าส่วนแปด มีค่าเท่าใด",
    "ttsExplanation": "ทำเศษส่วนให้เท่ากันแล้วตัดทอน ตอบ สอง ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_13",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เศษส่วนและทศนิยม",
    "stem": "ถังใบหนึ่งมีน้ำอยู่ 3/5 ถัง ตักออกไป 15 ลิตร เหลือน้ำ 1/3 ถัง ถังนี้จุน้ำได้กี่ลิตร?",
    "choices": [
      {
        "text": "45 ลิตร",
        "isCorrect": false
      },
      {
        "text": "50 ลิตร",
        "isCorrect": false
      },
      {
        "text": "56.25 ลิตร",
        "isCorrect": true
      },
      {
        "text": "60 ลิตร",
        "isCorrect": false
      }
    ],
    "metaphor": "ทำส่วนให้เท่ากันก่อนแล้วค่อยบวก จากนั้นเปลี่ยนหารเป็นคูณกลับเศษเป็นส่วน!",
    "stepsMath": "3/5 - 1/3 = 4/15 ของถัง ➔ 4/15 = 15 ลิตร ➔ จุทั้งหมด = (15 × 15)/4 = 56.25 ลิตร",
    "proShortcut": "ตัดทอนตัวเลขเศษส่วนให้เหลือน้อยที่สุดก่อนคูณ!",
    "ttsStem": "ถังใบหนึ่งมีน้ำอยู่ เศษสามส่วนห้า ของถัง ตักออกไปสิบห้าลิตร เหลือน้ำ เศษหนึ่งส่วนสาม ถัง ถังนี้จุน้ำได้กี่ลิตร",
    "ttsExplanation": "คำนวณส่วนต่างได้ ห้าสิบหกจุดสองห้า ลิตรครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_14",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เศษส่วนและทศนิยม",
    "stem": "ผลลัพธ์ของ (3/4 + 1/2) ÷ 5/8 มีค่าเท่ากับข้อใด?",
    "choices": [
      {
        "text": "2",
        "isCorrect": true
      },
      {
        "text": "1.5",
        "isCorrect": false
      },
      {
        "text": "2.5",
        "isCorrect": false
      },
      {
        "text": "3",
        "isCorrect": false
      }
    ],
    "metaphor": "ทำส่วนให้เท่ากันก่อนแล้วค่อยบวก จากนั้นเปลี่ยนหารเป็นคูณกลับเศษเป็นส่วน!",
    "stepsMath": "3/4 + 2/4 = 5/4 ➔ 5/4 ÷ 5/8 = 5/4 × 8/5 = 2",
    "proShortcut": "ตัดทอนตัวเลขเศษส่วนให้เหลือน้อยที่สุดก่อนคูณ!",
    "ttsStem": "ผลลัพธ์ของ เศษสามส่วนสี่ บวก เศษหนึ่งส่วนสอง แล้วหารด้วย เศษห้าส่วนแปด มีค่าเท่าใด",
    "ttsExplanation": "ทำเศษส่วนให้เท่ากันแล้วตัดทอน ตอบ สอง ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_15",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เศษส่วนและทศนิยม",
    "stem": "ถังใบหนึ่งมีน้ำอยู่ 3/5 ถัง ตักออกไป 15 ลิตร เหลือน้ำ 1/3 ถัง ถังนี้จุน้ำได้กี่ลิตร?",
    "choices": [
      {
        "text": "45 ลิตร",
        "isCorrect": false
      },
      {
        "text": "50 ลิตร",
        "isCorrect": false
      },
      {
        "text": "56.25 ลิตร",
        "isCorrect": true
      },
      {
        "text": "60 ลิตร",
        "isCorrect": false
      }
    ],
    "metaphor": "ทำส่วนให้เท่ากันก่อนแล้วค่อยบวก จากนั้นเปลี่ยนหารเป็นคูณกลับเศษเป็นส่วน!",
    "stepsMath": "3/5 - 1/3 = 4/15 ของถัง ➔ 4/15 = 15 ลิตร ➔ จุทั้งหมด = (15 × 15)/4 = 56.25 ลิตร",
    "proShortcut": "ตัดทอนตัวเลขเศษส่วนให้เหลือน้อยที่สุดก่อนคูณ!",
    "ttsStem": "ถังใบหนึ่งมีน้ำอยู่ เศษสามส่วนห้า ของถัง ตักออกไปสิบห้าลิตร เหลือน้ำ เศษหนึ่งส่วนสาม ถัง ถังนี้จุน้ำได้กี่ลิตร",
    "ttsExplanation": "คำนวณส่วนต่างได้ ห้าสิบหกจุดสองห้า ลิตรครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_16",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เรขาคณิตและการวัด",
    "stem": "สี่เหลี่ยมผืนผ้ารูปหนึ่งมีเส้นรอบรูปยาว 48 ซม. ถ้าด้านยาวยาวเป็น 2 เท่าของด้านกว้าง พื้นที่รูปนี้เป็นกี่ ตร.ซม.?",
    "choices": [
      {
        "text": "128 ตร.ซม.",
        "isCorrect": true
      },
      {
        "text": "144 ตร.ซม.",
        "isCorrect": false
      },
      {
        "text": "96 ตร.ซม.",
        "isCorrect": false
      },
      {
        "text": "160 ตร.ซม.",
        "isCorrect": false
      }
    ],
    "metaphor": "ด้านยาว+กว้าง = ครึ่งหนึ่งของเส้นรอบรูป คือ 24 ซม.!",
    "stepsMath": "กว้าง x, ยาว 2x ➔ 3x = 24 ➔ กว้าง=8, ยาว=16 ➔ พื้นที่ = 8 × 16 = 128 ตร.ซม.",
    "proShortcut": "แบ่ง 24 เป็น 3 ส่วน ได้ 8 และ 16 ➔ 8 × 16 = 128",
    "ttsStem": "สี่เหลี่ยมผืนผ้ามีเส้นรอบรูปยาว สี่สิบแปด เซนติเมตร ด้านยาวยาวเป็นสองเท่าของด้านกว้าง พื้นที่เป็นกี่ตารางเซนติเมตร",
    "ttsExplanation": "คำนวณพื้นที่ได้ หนึ่งร้อยยี่สิบแปด ตารางเซนติเมตรครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_17",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เรขาคณิตและการวัด",
    "stem": "ทรงสี่เหลี่ยมมุมฉากกว้าง 4 ซม. ยาว 6 ซม. สูง 10 ซม. มีปริมาตรกี่ลูกบาศก์เซนติเมตร?",
    "choices": [
      {
        "text": "200 ลบ.ซม.",
        "isCorrect": false
      },
      {
        "text": "240 ลบ.ซม.",
        "isCorrect": true
      },
      {
        "text": "280 ลบ.ซม.",
        "isCorrect": false
      },
      {
        "text": "120 ลบ.ซม.",
        "isCorrect": false
      }
    ],
    "metaphor": "ปริมาตรกล่องง่ายนิดเดียว: กว้าง × ยาว × สูง!",
    "stepsMath": "ปริมาตร = 4 × 6 × 10 = 240 ลบ.ซม.",
    "proShortcut": "เอา 4 คูณ 6 ได้ 24 เติม 0 ได้ 240 ทันที!",
    "ttsStem": "กล่องกว้างสี่เซนติเมตร ยาวหกเซนติเมตร สูงสิบเซนติเมตร มีปริมาตรกี่ลูกบาศก์เซนติเมตร",
    "ttsExplanation": "กว้างคูณยาวคูณสูง ได้ สองร้อยสี่สิบลบเซนติเมตรครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_18",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เรขาคณิตและการวัด",
    "stem": "สี่เหลี่ยมผืนผ้ารูปหนึ่งมีเส้นรอบรูปยาว 48 ซม. ถ้าด้านยาวยาวเป็น 2 เท่าของด้านกว้าง พื้นที่รูปนี้เป็นกี่ ตร.ซม.?",
    "choices": [
      {
        "text": "128 ตร.ซม.",
        "isCorrect": true
      },
      {
        "text": "144 ตร.ซม.",
        "isCorrect": false
      },
      {
        "text": "96 ตร.ซม.",
        "isCorrect": false
      },
      {
        "text": "160 ตร.ซม.",
        "isCorrect": false
      }
    ],
    "metaphor": "ด้านยาว+กว้าง = ครึ่งหนึ่งของเส้นรอบรูป คือ 24 ซม.!",
    "stepsMath": "กว้าง x, ยาว 2x ➔ 3x = 24 ➔ กว้าง=8, ยาว=16 ➔ พื้นที่ = 8 × 16 = 128 ตร.ซม.",
    "proShortcut": "แบ่ง 24 เป็น 3 ส่วน ได้ 8 และ 16 ➔ 8 × 16 = 128",
    "ttsStem": "สี่เหลี่ยมผืนผ้ามีเส้นรอบรูปยาว สี่สิบแปด เซนติเมตร ด้านยาวยาวเป็นสองเท่าของด้านกว้าง พื้นที่เป็นกี่ตารางเซนติเมตร",
    "ttsExplanation": "คำนวณพื้นที่ได้ หนึ่งร้อยยี่สิบแปด ตารางเซนติเมตรครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_19",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เรขาคณิตและการวัด",
    "stem": "ทรงสี่เหลี่ยมมุมฉากกว้าง 4 ซม. ยาว 6 ซม. สูง 10 ซม. มีปริมาตรกี่ลูกบาศก์เซนติเมตร?",
    "choices": [
      {
        "text": "200 ลบ.ซม.",
        "isCorrect": false
      },
      {
        "text": "240 ลบ.ซม.",
        "isCorrect": true
      },
      {
        "text": "280 ลบ.ซม.",
        "isCorrect": false
      },
      {
        "text": "120 ลบ.ซม.",
        "isCorrect": false
      }
    ],
    "metaphor": "ปริมาตรกล่องง่ายนิดเดียว: กว้าง × ยาว × สูง!",
    "stepsMath": "ปริมาตร = 4 × 6 × 10 = 240 ลบ.ซม.",
    "proShortcut": "เอา 4 คูณ 6 ได้ 24 เติม 0 ได้ 240 ทันที!",
    "ttsStem": "กล่องกว้างสี่เซนติเมตร ยาวหกเซนติเมตร สูงสิบเซนติเมตร มีปริมาตรกี่ลูกบาศก์เซนติเมตร",
    "ttsExplanation": "กว้างคูณยาวคูณสูง ได้ สองร้อยสี่สิบลบเซนติเมตรครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_20",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เรขาคณิตและการวัด",
    "stem": "สี่เหลี่ยมผืนผ้ารูปหนึ่งมีเส้นรอบรูปยาว 48 ซม. ถ้าด้านยาวยาวเป็น 2 เท่าของด้านกว้าง พื้นที่รูปนี้เป็นกี่ ตร.ซม.?",
    "choices": [
      {
        "text": "128 ตร.ซม.",
        "isCorrect": true
      },
      {
        "text": "144 ตร.ซม.",
        "isCorrect": false
      },
      {
        "text": "96 ตร.ซม.",
        "isCorrect": false
      },
      {
        "text": "160 ตร.ซม.",
        "isCorrect": false
      }
    ],
    "metaphor": "ด้านยาว+กว้าง = ครึ่งหนึ่งของเส้นรอบรูป คือ 24 ซม.!",
    "stepsMath": "กว้าง x, ยาว 2x ➔ 3x = 24 ➔ กว้าง=8, ยาว=16 ➔ พื้นที่ = 8 × 16 = 128 ตร.ซม.",
    "proShortcut": "แบ่ง 24 เป็น 3 ส่วน ได้ 8 และ 16 ➔ 8 × 16 = 128",
    "ttsStem": "สี่เหลี่ยมผืนผ้ามีเส้นรอบรูปยาว สี่สิบแปด เซนติเมตร ด้านยาวยาวเป็นสองเท่าของด้านกว้าง พื้นที่เป็นกี่ตารางเซนติเมตร",
    "ttsExplanation": "คำนวณพื้นที่ได้ หนึ่งร้อยยี่สิบแปด ตารางเซนติเมตรครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_21",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เรขาคณิตและการวัด",
    "stem": "ทรงสี่เหลี่ยมมุมฉากกว้าง 4 ซม. ยาว 6 ซม. สูง 10 ซม. มีปริมาตรกี่ลูกบาศก์เซนติเมตร?",
    "choices": [
      {
        "text": "200 ลบ.ซม.",
        "isCorrect": false
      },
      {
        "text": "240 ลบ.ซม.",
        "isCorrect": true
      },
      {
        "text": "280 ลบ.ซม.",
        "isCorrect": false
      },
      {
        "text": "120 ลบ.ซม.",
        "isCorrect": false
      }
    ],
    "metaphor": "ปริมาตรกล่องง่ายนิดเดียว: กว้าง × ยาว × สูง!",
    "stepsMath": "ปริมาตร = 4 × 6 × 10 = 240 ลบ.ซม.",
    "proShortcut": "เอา 4 คูณ 6 ได้ 24 เติม 0 ได้ 240 ทันที!",
    "ttsStem": "กล่องกว้างสี่เซนติเมตร ยาวหกเซนติเมตร สูงสิบเซนติเมตร มีปริมาตรกี่ลูกบาศก์เซนติเมตร",
    "ttsExplanation": "กว้างคูณยาวคูณสูง ได้ สองร้อยสี่สิบลบเซนติเมตรครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_22",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เรขาคณิตและการวัด",
    "stem": "สี่เหลี่ยมผืนผ้ารูปหนึ่งมีเส้นรอบรูปยาว 48 ซม. ถ้าด้านยาวยาวเป็น 2 เท่าของด้านกว้าง พื้นที่รูปนี้เป็นกี่ ตร.ซม.?",
    "choices": [
      {
        "text": "128 ตร.ซม.",
        "isCorrect": true
      },
      {
        "text": "144 ตร.ซม.",
        "isCorrect": false
      },
      {
        "text": "96 ตร.ซม.",
        "isCorrect": false
      },
      {
        "text": "160 ตร.ซม.",
        "isCorrect": false
      }
    ],
    "metaphor": "ด้านยาว+กว้าง = ครึ่งหนึ่งของเส้นรอบรูป คือ 24 ซม.!",
    "stepsMath": "กว้าง x, ยาว 2x ➔ 3x = 24 ➔ กว้าง=8, ยาว=16 ➔ พื้นที่ = 8 × 16 = 128 ตร.ซม.",
    "proShortcut": "แบ่ง 24 เป็น 3 ส่วน ได้ 8 และ 16 ➔ 8 × 16 = 128",
    "ttsStem": "สี่เหลี่ยมผืนผ้ามีเส้นรอบรูปยาว สี่สิบแปด เซนติเมตร ด้านยาวยาวเป็นสองเท่าของด้านกว้าง พื้นที่เป็นกี่ตารางเซนติเมตร",
    "ttsExplanation": "คำนวณพื้นที่ได้ หนึ่งร้อยยี่สิบแปด ตารางเซนติเมตรครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_23",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เรขาคณิตและการวัด",
    "stem": "ทรงสี่เหลี่ยมมุมฉากกว้าง 4 ซม. ยาว 6 ซม. สูง 10 ซม. มีปริมาตรกี่ลูกบาศก์เซนติเมตร?",
    "choices": [
      {
        "text": "200 ลบ.ซม.",
        "isCorrect": false
      },
      {
        "text": "240 ลบ.ซม.",
        "isCorrect": true
      },
      {
        "text": "280 ลบ.ซม.",
        "isCorrect": false
      },
      {
        "text": "120 ลบ.ซม.",
        "isCorrect": false
      }
    ],
    "metaphor": "ปริมาตรกล่องง่ายนิดเดียว: กว้าง × ยาว × สูง!",
    "stepsMath": "ปริมาตร = 4 × 6 × 10 = 240 ลบ.ซม.",
    "proShortcut": "เอา 4 คูณ 6 ได้ 24 เติม 0 ได้ 240 ทันที!",
    "ttsStem": "กล่องกว้างสี่เซนติเมตร ยาวหกเซนติเมตร สูงสิบเซนติเมตร มีปริมาตรกี่ลูกบาศก์เซนติเมตร",
    "ttsExplanation": "กว้างคูณยาวคูณสูง ได้ สองร้อยสี่สิบลบเซนติเมตรครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_24",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เรขาคณิตและการวัด",
    "stem": "สี่เหลี่ยมผืนผ้ารูปหนึ่งมีเส้นรอบรูปยาว 48 ซม. ถ้าด้านยาวยาวเป็น 2 เท่าของด้านกว้าง พื้นที่รูปนี้เป็นกี่ ตร.ซม.?",
    "choices": [
      {
        "text": "128 ตร.ซม.",
        "isCorrect": true
      },
      {
        "text": "144 ตร.ซม.",
        "isCorrect": false
      },
      {
        "text": "96 ตร.ซม.",
        "isCorrect": false
      },
      {
        "text": "160 ตร.ซม.",
        "isCorrect": false
      }
    ],
    "metaphor": "ด้านยาว+กว้าง = ครึ่งหนึ่งของเส้นรอบรูป คือ 24 ซม.!",
    "stepsMath": "กว้าง x, ยาว 2x ➔ 3x = 24 ➔ กว้าง=8, ยาว=16 ➔ พื้นที่ = 8 × 16 = 128 ตร.ซม.",
    "proShortcut": "แบ่ง 24 เป็น 3 ส่วน ได้ 8 และ 16 ➔ 8 × 16 = 128",
    "ttsStem": "สี่เหลี่ยมผืนผ้ามีเส้นรอบรูปยาว สี่สิบแปด เซนติเมตร ด้านยาวยาวเป็นสองเท่าของด้านกว้าง พื้นที่เป็นกี่ตารางเซนติเมตร",
    "ttsExplanation": "คำนวณพื้นที่ได้ หนึ่งร้อยยี่สิบแปด ตารางเซนติเมตรครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_25",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "เรขาคณิตและการวัด",
    "stem": "ทรงสี่เหลี่ยมมุมฉากกว้าง 4 ซม. ยาว 6 ซม. สูง 10 ซม. มีปริมาตรกี่ลูกบาศก์เซนติเมตร?",
    "choices": [
      {
        "text": "200 ลบ.ซม.",
        "isCorrect": false
      },
      {
        "text": "240 ลบ.ซม.",
        "isCorrect": true
      },
      {
        "text": "280 ลบ.ซม.",
        "isCorrect": false
      },
      {
        "text": "120 ลบ.ซม.",
        "isCorrect": false
      }
    ],
    "metaphor": "ปริมาตรกล่องง่ายนิดเดียว: กว้าง × ยาว × สูง!",
    "stepsMath": "ปริมาตร = 4 × 6 × 10 = 240 ลบ.ซม.",
    "proShortcut": "เอา 4 คูณ 6 ได้ 24 เติม 0 ได้ 240 ทันที!",
    "ttsStem": "กล่องกว้างสี่เซนติเมตร ยาวหกเซนติเมตร สูงสิบเซนติเมตร มีปริมาตรกี่ลูกบาศก์เซนติเมตร",
    "ttsExplanation": "กว้างคูณยาวคูณสูง ได้ สองร้อยสี่สิบลบเซนติเมตรครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_26",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "สถิติและความน่าจะเป็น",
    "stem": "นักเรียน 5 คนมีน้ำหนักเฉลี่ย 42 กิโลกรัม ถ้านักเรียนคนที่หกเข้ามาทำให้ค่าเฉลี่ยเพิ่มเป็น 43 กิโลกรัม คนที่หกหนักกี่กิโลกรัม?",
    "choices": [
      {
        "text": "45 กก.",
        "isCorrect": false
      },
      {
        "text": "46 กก.",
        "isCorrect": false
      },
      {
        "text": "48 กก.",
        "isCorrect": true
      },
      {
        "text": "49 กก.",
        "isCorrect": false
      }
    ],
    "metaphor": "คนที่เข้ามาใหม่ ต้องแบกน้ำหนักตัวเองและแจกน้ำหนักให้เพื่อนอีก 5 คน คนละ 1 กิโลกรัม!",
    "stepsMath": "รวม 5 คน = 5 × 42 = 210 กก.<br>รวม 6 คน = 6 × 43 = 258 กก.<br>คนที่หก = 258 - 210 = 48 กิโลกรัม",
    "proShortcut": "สูตรคิดในใจ: เอาค่าเฉลี่ยใหม่ 43 + (เพิ่ม 1 กก. × เพื่อน 5 คน) = 43 + 5 = 48 กก.!",
    "ttsStem": "นักเรียนห้าคนมีน้ำหนักเฉลี่ย สี่สิบสอง กิโลกรัม คนที่หกเข้ามาทำให้เฉลี่ยเป็น สี่สิบสาม กิโลกรัม คนที่หกหนักกี่กิโลกรัม",
    "ttsExplanation": "คิดง่ายๆ ผลรวมใหม่ลบผลรวมเดิม ได้ สี่สิบแปด กิโลกรัมครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_27",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "สถิติและความน่าจะเป็น",
    "stem": "นักเรียน 5 คนมีน้ำหนักเฉลี่ย 42 กิโลกรัม ถ้านักเรียนคนที่หกเข้ามาทำให้ค่าเฉลี่ยเพิ่มเป็น 43 กิโลกรัม คนที่หกหนักกี่กิโลกรัม?",
    "choices": [
      {
        "text": "45 กก.",
        "isCorrect": false
      },
      {
        "text": "46 กก.",
        "isCorrect": false
      },
      {
        "text": "48 กก.",
        "isCorrect": true
      },
      {
        "text": "49 กก.",
        "isCorrect": false
      }
    ],
    "metaphor": "คนที่เข้ามาใหม่ ต้องแบกน้ำหนักตัวเองและแจกน้ำหนักให้เพื่อนอีก 5 คน คนละ 1 กิโลกรัม!",
    "stepsMath": "รวม 5 คน = 5 × 42 = 210 กก.<br>รวม 6 คน = 6 × 43 = 258 กก.<br>คนที่หก = 258 - 210 = 48 กิโลกรัม",
    "proShortcut": "สูตรคิดในใจ: เอาค่าเฉลี่ยใหม่ 43 + (เพิ่ม 1 กก. × เพื่อน 5 คน) = 43 + 5 = 48 กก.!",
    "ttsStem": "นักเรียนห้าคนมีน้ำหนักเฉลี่ย สี่สิบสอง กิโลกรัม คนที่หกเข้ามาทำให้เฉลี่ยเป็น สี่สิบสาม กิโลกรัม คนที่หกหนักกี่กิโลกรัม",
    "ttsExplanation": "คิดง่ายๆ ผลรวมใหม่ลบผลรวมเดิม ได้ สี่สิบแปด กิโลกรัมครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_28",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "สถิติและความน่าจะเป็น",
    "stem": "นักเรียน 5 คนมีน้ำหนักเฉลี่ย 42 กิโลกรัม ถ้านักเรียนคนที่หกเข้ามาทำให้ค่าเฉลี่ยเพิ่มเป็น 43 กิโลกรัม คนที่หกหนักกี่กิโลกรัม?",
    "choices": [
      {
        "text": "45 กก.",
        "isCorrect": false
      },
      {
        "text": "46 กก.",
        "isCorrect": false
      },
      {
        "text": "48 กก.",
        "isCorrect": true
      },
      {
        "text": "49 กก.",
        "isCorrect": false
      }
    ],
    "metaphor": "คนที่เข้ามาใหม่ ต้องแบกน้ำหนักตัวเองและแจกน้ำหนักให้เพื่อนอีก 5 คน คนละ 1 กิโลกรัม!",
    "stepsMath": "รวม 5 คน = 5 × 42 = 210 กก.<br>รวม 6 คน = 6 × 43 = 258 กก.<br>คนที่หก = 258 - 210 = 48 กิโลกรัม",
    "proShortcut": "สูตรคิดในใจ: เอาค่าเฉลี่ยใหม่ 43 + (เพิ่ม 1 กก. × เพื่อน 5 คน) = 43 + 5 = 48 กก.!",
    "ttsStem": "นักเรียนห้าคนมีน้ำหนักเฉลี่ย สี่สิบสอง กิโลกรัม คนที่หกเข้ามาทำให้เฉลี่ยเป็น สี่สิบสาม กิโลกรัม คนที่หกหนักกี่กิโลกรัม",
    "ttsExplanation": "คิดง่ายๆ ผลรวมใหม่ลบผลรวมเดิม ได้ สี่สิบแปด กิโลกรัมครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_29",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "สถิติและความน่าจะเป็น",
    "stem": "นักเรียน 5 คนมีน้ำหนักเฉลี่ย 42 กิโลกรัม ถ้านักเรียนคนที่หกเข้ามาทำให้ค่าเฉลี่ยเพิ่มเป็น 43 กิโลกรัม คนที่หกหนักกี่กิโลกรัม?",
    "choices": [
      {
        "text": "45 กก.",
        "isCorrect": false
      },
      {
        "text": "46 กก.",
        "isCorrect": false
      },
      {
        "text": "48 กก.",
        "isCorrect": true
      },
      {
        "text": "49 กก.",
        "isCorrect": false
      }
    ],
    "metaphor": "คนที่เข้ามาใหม่ ต้องแบกน้ำหนักตัวเองและแจกน้ำหนักให้เพื่อนอีก 5 คน คนละ 1 กิโลกรัม!",
    "stepsMath": "รวม 5 คน = 5 × 42 = 210 กก.<br>รวม 6 คน = 6 × 43 = 258 กก.<br>คนที่หก = 258 - 210 = 48 กิโลกรัม",
    "proShortcut": "สูตรคิดในใจ: เอาค่าเฉลี่ยใหม่ 43 + (เพิ่ม 1 กก. × เพื่อน 5 คน) = 43 + 5 = 48 กก.!",
    "ttsStem": "นักเรียนห้าคนมีน้ำหนักเฉลี่ย สี่สิบสอง กิโลกรัม คนที่หกเข้ามาทำให้เฉลี่ยเป็น สี่สิบสาม กิโลกรัม คนที่หกหนักกี่กิโลกรัม",
    "ttsExplanation": "คิดง่ายๆ ผลรวมใหม่ลบผลรวมเดิม ได้ สี่สิบแปด กิโลกรัมครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_30",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "สถิติและความน่าจะเป็น",
    "stem": "นักเรียน 5 คนมีน้ำหนักเฉลี่ย 42 กิโลกรัม ถ้านักเรียนคนที่หกเข้ามาทำให้ค่าเฉลี่ยเพิ่มเป็น 43 กิโลกรัม คนที่หกหนักกี่กิโลกรัม?",
    "choices": [
      {
        "text": "45 กก.",
        "isCorrect": false
      },
      {
        "text": "46 กก.",
        "isCorrect": false
      },
      {
        "text": "48 กก.",
        "isCorrect": true
      },
      {
        "text": "49 กก.",
        "isCorrect": false
      }
    ],
    "metaphor": "คนที่เข้ามาใหม่ ต้องแบกน้ำหนักตัวเองและแจกน้ำหนักให้เพื่อนอีก 5 คน คนละ 1 กิโลกรัม!",
    "stepsMath": "รวม 5 คน = 5 × 42 = 210 กก.<br>รวม 6 คน = 6 × 43 = 258 กก.<br>คนที่หก = 258 - 210 = 48 กิโลกรัม",
    "proShortcut": "สูตรคิดในใจ: เอาค่าเฉลี่ยใหม่ 43 + (เพิ่ม 1 กก. × เพื่อน 5 คน) = 43 + 5 = 48 กก.!",
    "ttsStem": "นักเรียนห้าคนมีน้ำหนักเฉลี่ย สี่สิบสอง กิโลกรัม คนที่หกเข้ามาทำให้เฉลี่ยเป็น สี่สิบสาม กิโลกรัม คนที่หกหนักกี่กิโลกรัม",
    "ttsExplanation": "คิดง่ายๆ ผลรวมใหม่ลบผลรวมเดิม ได้ สี่สิบแปด กิโลกรัมครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_31",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "สถิติและความน่าจะเป็น",
    "stem": "นักเรียน 5 คนมีน้ำหนักเฉลี่ย 42 กิโลกรัม ถ้านักเรียนคนที่หกเข้ามาทำให้ค่าเฉลี่ยเพิ่มเป็น 43 กิโลกรัม คนที่หกหนักกี่กิโลกรัม?",
    "choices": [
      {
        "text": "45 กก.",
        "isCorrect": false
      },
      {
        "text": "46 กก.",
        "isCorrect": false
      },
      {
        "text": "48 กก.",
        "isCorrect": true
      },
      {
        "text": "49 กก.",
        "isCorrect": false
      }
    ],
    "metaphor": "คนที่เข้ามาใหม่ ต้องแบกน้ำหนักตัวเองและแจกน้ำหนักให้เพื่อนอีก 5 คน คนละ 1 กิโลกรัม!",
    "stepsMath": "รวม 5 คน = 5 × 42 = 210 กก.<br>รวม 6 คน = 6 × 43 = 258 กก.<br>คนที่หก = 258 - 210 = 48 กิโลกรัม",
    "proShortcut": "สูตรคิดในใจ: เอาค่าเฉลี่ยใหม่ 43 + (เพิ่ม 1 กก. × เพื่อน 5 คน) = 43 + 5 = 48 กก.!",
    "ttsStem": "นักเรียนห้าคนมีน้ำหนักเฉลี่ย สี่สิบสอง กิโลกรัม คนที่หกเข้ามาทำให้เฉลี่ยเป็น สี่สิบสาม กิโลกรัม คนที่หกหนักกี่กิโลกรัม",
    "ttsExplanation": "คิดง่ายๆ ผลรวมใหม่ลบผลรวมเดิม ได้ สี่สิบแปด กิโลกรัมครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_32",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "สถิติและความน่าจะเป็น",
    "stem": "นักเรียน 5 คนมีน้ำหนักเฉลี่ย 42 กิโลกรัม ถ้านักเรียนคนที่หกเข้ามาทำให้ค่าเฉลี่ยเพิ่มเป็น 43 กิโลกรัม คนที่หกหนักกี่กิโลกรัม?",
    "choices": [
      {
        "text": "45 กก.",
        "isCorrect": false
      },
      {
        "text": "46 กก.",
        "isCorrect": false
      },
      {
        "text": "48 กก.",
        "isCorrect": true
      },
      {
        "text": "49 กก.",
        "isCorrect": false
      }
    ],
    "metaphor": "คนที่เข้ามาใหม่ ต้องแบกน้ำหนักตัวเองและแจกน้ำหนักให้เพื่อนอีก 5 คน คนละ 1 กิโลกรัม!",
    "stepsMath": "รวม 5 คน = 5 × 42 = 210 กก.<br>รวม 6 คน = 6 × 43 = 258 กก.<br>คนที่หก = 258 - 210 = 48 กิโลกรัม",
    "proShortcut": "สูตรคิดในใจ: เอาค่าเฉลี่ยใหม่ 43 + (เพิ่ม 1 กก. × เพื่อน 5 คน) = 43 + 5 = 48 กก.!",
    "ttsStem": "นักเรียนห้าคนมีน้ำหนักเฉลี่ย สี่สิบสอง กิโลกรัม คนที่หกเข้ามาทำให้เฉลี่ยเป็น สี่สิบสาม กิโลกรัม คนที่หกหนักกี่กิโลกรัม",
    "ttsExplanation": "คิดง่ายๆ ผลรวมใหม่ลบผลรวมเดิม ได้ สี่สิบแปด กิโลกรัมครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_33",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "สถิติและความน่าจะเป็น",
    "stem": "นักเรียน 5 คนมีน้ำหนักเฉลี่ย 42 กิโลกรัม ถ้านักเรียนคนที่หกเข้ามาทำให้ค่าเฉลี่ยเพิ่มเป็น 43 กิโลกรัม คนที่หกหนักกี่กิโลกรัม?",
    "choices": [
      {
        "text": "45 กก.",
        "isCorrect": false
      },
      {
        "text": "46 กก.",
        "isCorrect": false
      },
      {
        "text": "48 กก.",
        "isCorrect": true
      },
      {
        "text": "49 กก.",
        "isCorrect": false
      }
    ],
    "metaphor": "คนที่เข้ามาใหม่ ต้องแบกน้ำหนักตัวเองและแจกน้ำหนักให้เพื่อนอีก 5 คน คนละ 1 กิโลกรัม!",
    "stepsMath": "รวม 5 คน = 5 × 42 = 210 กก.<br>รวม 6 คน = 6 × 43 = 258 กก.<br>คนที่หก = 258 - 210 = 48 กิโลกรัม",
    "proShortcut": "สูตรคิดในใจ: เอาค่าเฉลี่ยใหม่ 43 + (เพิ่ม 1 กก. × เพื่อน 5 คน) = 43 + 5 = 48 กก.!",
    "ttsStem": "นักเรียนห้าคนมีน้ำหนักเฉลี่ย สี่สิบสอง กิโลกรัม คนที่หกเข้ามาทำให้เฉลี่ยเป็น สี่สิบสาม กิโลกรัม คนที่หกหนักกี่กิโลกรัม",
    "ttsExplanation": "คิดง่ายๆ ผลรวมใหม่ลบผลรวมเดิม ได้ สี่สิบแปด กิโลกรัมครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_34",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "สถิติและความน่าจะเป็น",
    "stem": "นักเรียน 5 คนมีน้ำหนักเฉลี่ย 42 กิโลกรัม ถ้านักเรียนคนที่หกเข้ามาทำให้ค่าเฉลี่ยเพิ่มเป็น 43 กิโลกรัม คนที่หกหนักกี่กิโลกรัม?",
    "choices": [
      {
        "text": "45 กก.",
        "isCorrect": false
      },
      {
        "text": "46 กก.",
        "isCorrect": false
      },
      {
        "text": "48 กก.",
        "isCorrect": true
      },
      {
        "text": "49 กก.",
        "isCorrect": false
      }
    ],
    "metaphor": "คนที่เข้ามาใหม่ ต้องแบกน้ำหนักตัวเองและแจกน้ำหนักให้เพื่อนอีก 5 คน คนละ 1 กิโลกรัม!",
    "stepsMath": "รวม 5 คน = 5 × 42 = 210 กก.<br>รวม 6 คน = 6 × 43 = 258 กก.<br>คนที่หก = 258 - 210 = 48 กิโลกรัม",
    "proShortcut": "สูตรคิดในใจ: เอาค่าเฉลี่ยใหม่ 43 + (เพิ่ม 1 กก. × เพื่อน 5 คน) = 43 + 5 = 48 กก.!",
    "ttsStem": "นักเรียนห้าคนมีน้ำหนักเฉลี่ย สี่สิบสอง กิโลกรัม คนที่หกเข้ามาทำให้เฉลี่ยเป็น สี่สิบสาม กิโลกรัม คนที่หกหนักกี่กิโลกรัม",
    "ttsExplanation": "คิดง่ายๆ ผลรวมใหม่ลบผลรวมเดิม ได้ สี่สิบแปด กิโลกรัมครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_35",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "สถิติและความน่าจะเป็น",
    "stem": "นักเรียน 5 คนมีน้ำหนักเฉลี่ย 42 กิโลกรัม ถ้านักเรียนคนที่หกเข้ามาทำให้ค่าเฉลี่ยเพิ่มเป็น 43 กิโลกรัม คนที่หกหนักกี่กิโลกรัม?",
    "choices": [
      {
        "text": "45 กก.",
        "isCorrect": false
      },
      {
        "text": "46 กก.",
        "isCorrect": false
      },
      {
        "text": "48 กก.",
        "isCorrect": true
      },
      {
        "text": "49 กก.",
        "isCorrect": false
      }
    ],
    "metaphor": "คนที่เข้ามาใหม่ ต้องแบกน้ำหนักตัวเองและแจกน้ำหนักให้เพื่อนอีก 5 คน คนละ 1 กิโลกรัม!",
    "stepsMath": "รวม 5 คน = 5 × 42 = 210 กก.<br>รวม 6 คน = 6 × 43 = 258 กก.<br>คนที่หก = 258 - 210 = 48 กิโลกรัม",
    "proShortcut": "สูตรคิดในใจ: เอาค่าเฉลี่ยใหม่ 43 + (เพิ่ม 1 กก. × เพื่อน 5 คน) = 43 + 5 = 48 กก.!",
    "ttsStem": "นักเรียนห้าคนมีน้ำหนักเฉลี่ย สี่สิบสอง กิโลกรัม คนที่หกเข้ามาทำให้เฉลี่ยเป็น สี่สิบสาม กิโลกรัม คนที่หกหนักกี่กิโลกรัม",
    "ttsExplanation": "คิดง่ายๆ ผลรวมใหม่ลบผลรวมเดิม ได้ สี่สิบแปด กิโลกรัมครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_36",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "โจทย์ประยุกต์และสมการ",
    "stem": "นำเลขเรียงกัน 3 จำนวนบวกกันได้ 72 จำนวนที่มากที่สุดในกลุ่มนี้คือจำนวนใด?",
    "choices": [
      {
        "text": "23",
        "isCorrect": false
      },
      {
        "text": "24",
        "isCorrect": false
      },
      {
        "text": "25",
        "isCorrect": true
      },
      {
        "text": "26",
        "isCorrect": false
      }
    ],
    "metaphor": "เลข 3 ตัวเรียงกันบวกกัน ตัวตรงกลางคือ 'ค่าเฉลี่ย' พอดีเลย!",
    "stepsMath": "ตัวตรงกลาง = 72 ÷ 3 = 24 ➔ เลข 3 จำนวนคือ 23, 24, 25 ➔ ตัวมากสุดคือ 25",
    "proShortcut": "เอา 72 ÷ 3 = 24 แล้วบวก 1 ได้ 25 ทันที!",
    "ttsStem": "เลขเรียงกันสามจำนวนบวกกันได้ เจ็ดสิบสอง จำนวนที่มากที่สุดคือจำนวนใด",
    "ttsExplanation": "เอา เจ็ดสิบสอง หาร สาม ได้ตัวกลางคือ ยี่สิบสี่ ตัวมากสุดจึงเป็น ยี่สิบห้า ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_37",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "โจทย์ประยุกต์และสมการ",
    "stem": "นำเลขเรียงกัน 3 จำนวนบวกกันได้ 72 จำนวนที่มากที่สุดในกลุ่มนี้คือจำนวนใด?",
    "choices": [
      {
        "text": "23",
        "isCorrect": false
      },
      {
        "text": "24",
        "isCorrect": false
      },
      {
        "text": "25",
        "isCorrect": true
      },
      {
        "text": "26",
        "isCorrect": false
      }
    ],
    "metaphor": "เลข 3 ตัวเรียงกันบวกกัน ตัวตรงกลางคือ 'ค่าเฉลี่ย' พอดีเลย!",
    "stepsMath": "ตัวตรงกลาง = 72 ÷ 3 = 24 ➔ เลข 3 จำนวนคือ 23, 24, 25 ➔ ตัวมากสุดคือ 25",
    "proShortcut": "เอา 72 ÷ 3 = 24 แล้วบวก 1 ได้ 25 ทันที!",
    "ttsStem": "เลขเรียงกันสามจำนวนบวกกันได้ เจ็ดสิบสอง จำนวนที่มากที่สุดคือจำนวนใด",
    "ttsExplanation": "เอา เจ็ดสิบสอง หาร สาม ได้ตัวกลางคือ ยี่สิบสี่ ตัวมากสุดจึงเป็น ยี่สิบห้า ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_38",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "โจทย์ประยุกต์และสมการ",
    "stem": "นำเลขเรียงกัน 3 จำนวนบวกกันได้ 72 จำนวนที่มากที่สุดในกลุ่มนี้คือจำนวนใด?",
    "choices": [
      {
        "text": "23",
        "isCorrect": false
      },
      {
        "text": "24",
        "isCorrect": false
      },
      {
        "text": "25",
        "isCorrect": true
      },
      {
        "text": "26",
        "isCorrect": false
      }
    ],
    "metaphor": "เลข 3 ตัวเรียงกันบวกกัน ตัวตรงกลางคือ 'ค่าเฉลี่ย' พอดีเลย!",
    "stepsMath": "ตัวตรงกลาง = 72 ÷ 3 = 24 ➔ เลข 3 จำนวนคือ 23, 24, 25 ➔ ตัวมากสุดคือ 25",
    "proShortcut": "เอา 72 ÷ 3 = 24 แล้วบวก 1 ได้ 25 ทันที!",
    "ttsStem": "เลขเรียงกันสามจำนวนบวกกันได้ เจ็ดสิบสอง จำนวนที่มากที่สุดคือจำนวนใด",
    "ttsExplanation": "เอา เจ็ดสิบสอง หาร สาม ได้ตัวกลางคือ ยี่สิบสี่ ตัวมากสุดจึงเป็น ยี่สิบห้า ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_39",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "โจทย์ประยุกต์และสมการ",
    "stem": "นำเลขเรียงกัน 3 จำนวนบวกกันได้ 72 จำนวนที่มากที่สุดในกลุ่มนี้คือจำนวนใด?",
    "choices": [
      {
        "text": "23",
        "isCorrect": false
      },
      {
        "text": "24",
        "isCorrect": false
      },
      {
        "text": "25",
        "isCorrect": true
      },
      {
        "text": "26",
        "isCorrect": false
      }
    ],
    "metaphor": "เลข 3 ตัวเรียงกันบวกกัน ตัวตรงกลางคือ 'ค่าเฉลี่ย' พอดีเลย!",
    "stepsMath": "ตัวตรงกลาง = 72 ÷ 3 = 24 ➔ เลข 3 จำนวนคือ 23, 24, 25 ➔ ตัวมากสุดคือ 25",
    "proShortcut": "เอา 72 ÷ 3 = 24 แล้วบวก 1 ได้ 25 ทันที!",
    "ttsStem": "เลขเรียงกันสามจำนวนบวกกันได้ เจ็ดสิบสอง จำนวนที่มากที่สุดคือจำนวนใด",
    "ttsExplanation": "เอา เจ็ดสิบสอง หาร สาม ได้ตัวกลางคือ ยี่สิบสี่ ตัวมากสุดจึงเป็น ยี่สิบห้า ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_40",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "โจทย์ประยุกต์และสมการ",
    "stem": "นำเลขเรียงกัน 3 จำนวนบวกกันได้ 72 จำนวนที่มากที่สุดในกลุ่มนี้คือจำนวนใด?",
    "choices": [
      {
        "text": "23",
        "isCorrect": false
      },
      {
        "text": "24",
        "isCorrect": false
      },
      {
        "text": "25",
        "isCorrect": true
      },
      {
        "text": "26",
        "isCorrect": false
      }
    ],
    "metaphor": "เลข 3 ตัวเรียงกันบวกกัน ตัวตรงกลางคือ 'ค่าเฉลี่ย' พอดีเลย!",
    "stepsMath": "ตัวตรงกลาง = 72 ÷ 3 = 24 ➔ เลข 3 จำนวนคือ 23, 24, 25 ➔ ตัวมากสุดคือ 25",
    "proShortcut": "เอา 72 ÷ 3 = 24 แล้วบวก 1 ได้ 25 ทันที!",
    "ttsStem": "เลขเรียงกันสามจำนวนบวกกันได้ เจ็ดสิบสอง จำนวนที่มากที่สุดคือจำนวนใด",
    "ttsExplanation": "เอา เจ็ดสิบสอง หาร สาม ได้ตัวกลางคือ ยี่สิบสี่ ตัวมากสุดจึงเป็น ยี่สิบห้า ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_41",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "โจทย์ประยุกต์และสมการ",
    "stem": "นำเลขเรียงกัน 3 จำนวนบวกกันได้ 72 จำนวนที่มากที่สุดในกลุ่มนี้คือจำนวนใด?",
    "choices": [
      {
        "text": "23",
        "isCorrect": false
      },
      {
        "text": "24",
        "isCorrect": false
      },
      {
        "text": "25",
        "isCorrect": true
      },
      {
        "text": "26",
        "isCorrect": false
      }
    ],
    "metaphor": "เลข 3 ตัวเรียงกันบวกกัน ตัวตรงกลางคือ 'ค่าเฉลี่ย' พอดีเลย!",
    "stepsMath": "ตัวตรงกลาง = 72 ÷ 3 = 24 ➔ เลข 3 จำนวนคือ 23, 24, 25 ➔ ตัวมากสุดคือ 25",
    "proShortcut": "เอา 72 ÷ 3 = 24 แล้วบวก 1 ได้ 25 ทันที!",
    "ttsStem": "เลขเรียงกันสามจำนวนบวกกันได้ เจ็ดสิบสอง จำนวนที่มากที่สุดคือจำนวนใด",
    "ttsExplanation": "เอา เจ็ดสิบสอง หาร สาม ได้ตัวกลางคือ ยี่สิบสี่ ตัวมากสุดจึงเป็น ยี่สิบห้า ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_42",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "โจทย์ประยุกต์และสมการ",
    "stem": "นำเลขเรียงกัน 3 จำนวนบวกกันได้ 72 จำนวนที่มากที่สุดในกลุ่มนี้คือจำนวนใด?",
    "choices": [
      {
        "text": "23",
        "isCorrect": false
      },
      {
        "text": "24",
        "isCorrect": false
      },
      {
        "text": "25",
        "isCorrect": true
      },
      {
        "text": "26",
        "isCorrect": false
      }
    ],
    "metaphor": "เลข 3 ตัวเรียงกันบวกกัน ตัวตรงกลางคือ 'ค่าเฉลี่ย' พอดีเลย!",
    "stepsMath": "ตัวตรงกลาง = 72 ÷ 3 = 24 ➔ เลข 3 จำนวนคือ 23, 24, 25 ➔ ตัวมากสุดคือ 25",
    "proShortcut": "เอา 72 ÷ 3 = 24 แล้วบวก 1 ได้ 25 ทันที!",
    "ttsStem": "เลขเรียงกันสามจำนวนบวกกันได้ เจ็ดสิบสอง จำนวนที่มากที่สุดคือจำนวนใด",
    "ttsExplanation": "เอา เจ็ดสิบสอง หาร สาม ได้ตัวกลางคือ ยี่สิบสี่ ตัวมากสุดจึงเป็น ยี่สิบห้า ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_43",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "โจทย์ประยุกต์และสมการ",
    "stem": "นำเลขเรียงกัน 3 จำนวนบวกกันได้ 72 จำนวนที่มากที่สุดในกลุ่มนี้คือจำนวนใด?",
    "choices": [
      {
        "text": "23",
        "isCorrect": false
      },
      {
        "text": "24",
        "isCorrect": false
      },
      {
        "text": "25",
        "isCorrect": true
      },
      {
        "text": "26",
        "isCorrect": false
      }
    ],
    "metaphor": "เลข 3 ตัวเรียงกันบวกกัน ตัวตรงกลางคือ 'ค่าเฉลี่ย' พอดีเลย!",
    "stepsMath": "ตัวตรงกลาง = 72 ÷ 3 = 24 ➔ เลข 3 จำนวนคือ 23, 24, 25 ➔ ตัวมากสุดคือ 25",
    "proShortcut": "เอา 72 ÷ 3 = 24 แล้วบวก 1 ได้ 25 ทันที!",
    "ttsStem": "เลขเรียงกันสามจำนวนบวกกันได้ เจ็ดสิบสอง จำนวนที่มากที่สุดคือจำนวนใด",
    "ttsExplanation": "เอา เจ็ดสิบสอง หาร สาม ได้ตัวกลางคือ ยี่สิบสี่ ตัวมากสุดจึงเป็น ยี่สิบห้า ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_44",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "โจทย์ประยุกต์และสมการ",
    "stem": "นำเลขเรียงกัน 3 จำนวนบวกกันได้ 72 จำนวนที่มากที่สุดในกลุ่มนี้คือจำนวนใด?",
    "choices": [
      {
        "text": "23",
        "isCorrect": false
      },
      {
        "text": "24",
        "isCorrect": false
      },
      {
        "text": "25",
        "isCorrect": true
      },
      {
        "text": "26",
        "isCorrect": false
      }
    ],
    "metaphor": "เลข 3 ตัวเรียงกันบวกกัน ตัวตรงกลางคือ 'ค่าเฉลี่ย' พอดีเลย!",
    "stepsMath": "ตัวตรงกลาง = 72 ÷ 3 = 24 ➔ เลข 3 จำนวนคือ 23, 24, 25 ➔ ตัวมากสุดคือ 25",
    "proShortcut": "เอา 72 ÷ 3 = 24 แล้วบวก 1 ได้ 25 ทันที!",
    "ttsStem": "เลขเรียงกันสามจำนวนบวกกันได้ เจ็ดสิบสอง จำนวนที่มากที่สุดคือจำนวนใด",
    "ttsExplanation": "เอา เจ็ดสิบสอง หาร สาม ได้ตัวกลางคือ ยี่สิบสี่ ตัวมากสุดจึงเป็น ยี่สิบห้า ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_45",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "โจทย์ประยุกต์และสมการ",
    "stem": "นำเลขเรียงกัน 3 จำนวนบวกกันได้ 72 จำนวนที่มากที่สุดในกลุ่มนี้คือจำนวนใด?",
    "choices": [
      {
        "text": "23",
        "isCorrect": false
      },
      {
        "text": "24",
        "isCorrect": false
      },
      {
        "text": "25",
        "isCorrect": true
      },
      {
        "text": "26",
        "isCorrect": false
      }
    ],
    "metaphor": "เลข 3 ตัวเรียงกันบวกกัน ตัวตรงกลางคือ 'ค่าเฉลี่ย' พอดีเลย!",
    "stepsMath": "ตัวตรงกลาง = 72 ÷ 3 = 24 ➔ เลข 3 จำนวนคือ 23, 24, 25 ➔ ตัวมากสุดคือ 25",
    "proShortcut": "เอา 72 ÷ 3 = 24 แล้วบวก 1 ได้ 25 ทันที!",
    "ttsStem": "เลขเรียงกันสามจำนวนบวกกันได้ เจ็ดสิบสอง จำนวนที่มากที่สุดคือจำนวนใด",
    "ttsExplanation": "เอา เจ็ดสิบสอง หาร สาม ได้ตัวกลางคือ ยี่สิบสี่ ตัวมากสุดจึงเป็น ยี่สิบห้า ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_46",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "โจทย์ประยุกต์และสมการ",
    "stem": "นำเลขเรียงกัน 3 จำนวนบวกกันได้ 72 จำนวนที่มากที่สุดในกลุ่มนี้คือจำนวนใด?",
    "choices": [
      {
        "text": "23",
        "isCorrect": false
      },
      {
        "text": "24",
        "isCorrect": false
      },
      {
        "text": "25",
        "isCorrect": true
      },
      {
        "text": "26",
        "isCorrect": false
      }
    ],
    "metaphor": "เลข 3 ตัวเรียงกันบวกกัน ตัวตรงกลางคือ 'ค่าเฉลี่ย' พอดีเลย!",
    "stepsMath": "ตัวตรงกลาง = 72 ÷ 3 = 24 ➔ เลข 3 จำนวนคือ 23, 24, 25 ➔ ตัวมากสุดคือ 25",
    "proShortcut": "เอา 72 ÷ 3 = 24 แล้วบวก 1 ได้ 25 ทันที!",
    "ttsStem": "เลขเรียงกันสามจำนวนบวกกันได้ เจ็ดสิบสอง จำนวนที่มากที่สุดคือจำนวนใด",
    "ttsExplanation": "เอา เจ็ดสิบสอง หาร สาม ได้ตัวกลางคือ ยี่สิบสี่ ตัวมากสุดจึงเป็น ยี่สิบห้า ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_47",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "โจทย์ประยุกต์และสมการ",
    "stem": "นำเลขเรียงกัน 3 จำนวนบวกกันได้ 72 จำนวนที่มากที่สุดในกลุ่มนี้คือจำนวนใด?",
    "choices": [
      {
        "text": "23",
        "isCorrect": false
      },
      {
        "text": "24",
        "isCorrect": false
      },
      {
        "text": "25",
        "isCorrect": true
      },
      {
        "text": "26",
        "isCorrect": false
      }
    ],
    "metaphor": "เลข 3 ตัวเรียงกันบวกกัน ตัวตรงกลางคือ 'ค่าเฉลี่ย' พอดีเลย!",
    "stepsMath": "ตัวตรงกลาง = 72 ÷ 3 = 24 ➔ เลข 3 จำนวนคือ 23, 24, 25 ➔ ตัวมากสุดคือ 25",
    "proShortcut": "เอา 72 ÷ 3 = 24 แล้วบวก 1 ได้ 25 ทันที!",
    "ttsStem": "เลขเรียงกันสามจำนวนบวกกันได้ เจ็ดสิบสอง จำนวนที่มากที่สุดคือจำนวนใด",
    "ttsExplanation": "เอา เจ็ดสิบสอง หาร สาม ได้ตัวกลางคือ ยี่สิบสี่ ตัวมากสุดจึงเป็น ยี่สิบห้า ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_48",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "โจทย์ประยุกต์และสมการ",
    "stem": "นำเลขเรียงกัน 3 จำนวนบวกกันได้ 72 จำนวนที่มากที่สุดในกลุ่มนี้คือจำนวนใด?",
    "choices": [
      {
        "text": "23",
        "isCorrect": false
      },
      {
        "text": "24",
        "isCorrect": false
      },
      {
        "text": "25",
        "isCorrect": true
      },
      {
        "text": "26",
        "isCorrect": false
      }
    ],
    "metaphor": "เลข 3 ตัวเรียงกันบวกกัน ตัวตรงกลางคือ 'ค่าเฉลี่ย' พอดีเลย!",
    "stepsMath": "ตัวตรงกลาง = 72 ÷ 3 = 24 ➔ เลข 3 จำนวนคือ 23, 24, 25 ➔ ตัวมากสุดคือ 25",
    "proShortcut": "เอา 72 ÷ 3 = 24 แล้วบวก 1 ได้ 25 ทันที!",
    "ttsStem": "เลขเรียงกันสามจำนวนบวกกันได้ เจ็ดสิบสอง จำนวนที่มากที่สุดคือจำนวนใด",
    "ttsExplanation": "เอา เจ็ดสิบสอง หาร สาม ได้ตัวกลางคือ ยี่สิบสี่ ตัวมากสุดจึงเป็น ยี่สิบห้า ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_49",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "โจทย์ประยุกต์และสมการ",
    "stem": "นำเลขเรียงกัน 3 จำนวนบวกกันได้ 72 จำนวนที่มากที่สุดในกลุ่มนี้คือจำนวนใด?",
    "choices": [
      {
        "text": "23",
        "isCorrect": false
      },
      {
        "text": "24",
        "isCorrect": false
      },
      {
        "text": "25",
        "isCorrect": true
      },
      {
        "text": "26",
        "isCorrect": false
      }
    ],
    "metaphor": "เลข 3 ตัวเรียงกันบวกกัน ตัวตรงกลางคือ 'ค่าเฉลี่ย' พอดีเลย!",
    "stepsMath": "ตัวตรงกลาง = 72 ÷ 3 = 24 ➔ เลข 3 จำนวนคือ 23, 24, 25 ➔ ตัวมากสุดคือ 25",
    "proShortcut": "เอา 72 ÷ 3 = 24 แล้วบวก 1 ได้ 25 ทันที!",
    "ttsStem": "เลขเรียงกันสามจำนวนบวกกันได้ เจ็ดสิบสอง จำนวนที่มากที่สุดคือจำนวนใด",
    "ttsExplanation": "เอา เจ็ดสิบสอง หาร สาม ได้ตัวกลางคือ ยี่สิบสี่ ตัวมากสุดจึงเป็น ยี่สิบห้า ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "m_50",
    "subject": "math",
    "subjectName": "📐 คณิตศาสตร์ ม.1 ทั่วไป",
    "topic": "โจทย์ประยุกต์และสมการ",
    "stem": "นำเลขเรียงกัน 3 จำนวนบวกกันได้ 72 จำนวนที่มากที่สุดในกลุ่มนี้คือจำนวนใด?",
    "choices": [
      {
        "text": "23",
        "isCorrect": false
      },
      {
        "text": "24",
        "isCorrect": false
      },
      {
        "text": "25",
        "isCorrect": true
      },
      {
        "text": "26",
        "isCorrect": false
      }
    ],
    "metaphor": "เลข 3 ตัวเรียงกันบวกกัน ตัวตรงกลางคือ 'ค่าเฉลี่ย' พอดีเลย!",
    "stepsMath": "ตัวตรงกลาง = 72 ÷ 3 = 24 ➔ เลข 3 จำนวนคือ 23, 24, 25 ➔ ตัวมากสุดคือ 25",
    "proShortcut": "เอา 72 ÷ 3 = 24 แล้วบวก 1 ได้ 25 ทันที!",
    "ttsStem": "เลขเรียงกันสามจำนวนบวกกันได้ เจ็ดสิบสอง จำนวนที่มากที่สุดคือจำนวนใด",
    "ttsExplanation": "เอา เจ็ดสิบสอง หาร สาม ได้ตัวกลางคือ ยี่สิบสี่ ตัวมากสุดจึงเป็น ยี่สิบห้า ครับ",
    "graphicSvg": "",
    "explSvg": "\n        <svg viewBox=\"0 0 340 130\" class=\"w-full max-w-sm h-32\">\n          <rect width=\"340\" height=\"130\" fill=\"#FFFBEB\" rx=\"12\" stroke=\"#FCD34D\" stroke-width=\"1.5\"/>\n          <text x=\"170\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>\n          <!-- Track 1: 15 mins -->\n          <line x1=\"40\" y1=\"42\" x2=\"300\" y2=\"42\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"42\" r=\"5\" fill=\"#3B82F6\"/>\n          <circle cx=\"105\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"170\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"235\" cy=\"42\" r=\"4\" fill=\"#3B82F6\"/>\n          <circle cx=\"300\" cy=\"42\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">0</text>\n          <text x=\"100\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">15</text>\n          <text x=\"165\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">30</text>\n          <text x=\"230\" y=\"55\" font-size=\"9\" fill=\"#1E40AF\">45</text>\n          <text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 2: 20 mins -->\n          <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"75\" r=\"5\" fill=\"#F59E0B\"/>\n          <circle cx=\"126\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"213\" cy=\"75\" r=\"4\" fill=\"#F59E0B\"/>\n          <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"120\" y=\"88\" font-size=\"9\" fill=\"#B45309\">20</text>\n          <text x=\"207\" y=\"88\" font-size=\"9\" fill=\"#B45309\">40</text>\n          <text x=\"290\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Track 3: 30 mins -->\n          <line x1=\"40\" y1=\"108\" x2=\"300\" y2=\"108\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n          <circle cx=\"40\" cy=\"108\" r=\"5\" fill=\"#EF4444\"/>\n          <circle cx=\"170\" cy=\"108\" r=\"4\" fill=\"#EF4444\"/>\n          <circle cx=\"300\" cy=\"108\" r=\"7\" fill=\"#10B981\"/>\n          <text x=\"165\" y=\"122\" font-size=\"9\" fill=\"#B91C1C\">30</text>\n          <text x=\"290\" y=\"122\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">60 นาที</text>\n          <!-- Meeting Goal Line -->\n          <line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"115\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        </svg>\n        "
  },
  {
    "id": "s_1",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "สารอาหารและการทดสอบ",
    "stem": "สารละลายไอโอดีนใช้ทดสอบสารอาหารประเภทใด และจะเปลี่ยนเป็นสีใดเมื่อพบสารนั้น?",
    "choices": [
      {
        "text": "แป้ง - สีน้ำเงินเข้มแกมม่วง",
        "isCorrect": true
      },
      {
        "text": "น้ำตาล - สีส้มอิฐ",
        "isCorrect": false
      },
      {
        "text": "โปรตีน - สีม่วง",
        "isCorrect": false
      },
      {
        "text": "ไขมัน - สีโปร่งแสง",
        "isCorrect": false
      }
    ],
    "metaphor": "ไอโอดีนเป็นสีน้ำตาล แต่จะแปลงร่างเป็นสีน้ำเงินเข้มทันทีเมื่อเจอกับแป้ง!",
    "stepsMath": "ไอโอดีน + แป้ง ➔ น้ำเงินเข้มแกมม่วง",
    "proShortcut": "จำคู่: ไอโอดีน = แป้ง (น้ำเงิน)",
    "ttsStem": "สารละลายไอโอดีนใช้ทดสอบสารอาหารประเภทใด และเปลี่ยนเป็นสีใด",
    "ttsExplanation": "ไอโอดีนใช้ทดสอบแป้ง และเปลี่ยนเป็นสีน้ำเงินเข้มครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"300\" height=\"110\" fill=\"#F8FAFC\" rx=\"12\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n          <!-- Tube 1: Iodine -> Blue -->\n          <rect x=\"40\" y=\"25\" width=\"22\" height=\"60\" rx=\"11\" fill=\"#E2E8F0\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n          <rect x=\"42\" y=\"50\" width=\"18\" height=\"33\" rx=\"9\" fill=\"#1E3A8A\"/>\n          <text x=\"51\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#1E3A8A\" text-anchor=\"middle\">แป้ง (น้ำเงิน)</text>\n          <!-- Tube 2: Benedict -> Orange -->\n          <rect x=\"140\" y=\"25\" width=\"22\" height=\"60\" rx=\"11\" fill=\"#E2E8F0\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n          <rect x=\"142\" y=\"50\" width=\"18\" height=\"33\" rx=\"9\" fill=\"#EA580C\"/>\n          <text x=\"151\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#EA580C\" text-anchor=\"middle\">น้ำตาล (ส้มอิฐ)</text>\n          <!-- Tube 3: Biuret -> Violet -->\n          <rect x=\"235\" y=\"25\" width=\"22\" height=\"60\" rx=\"11\" fill=\"#E2E8F0\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n          <rect x=\"237\" y=\"50\" width=\"18\" height=\"33\" rx=\"9\" fill=\"#9333EA\"/>\n          <text x=\"246\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#7E22CE\" text-anchor=\"middle\">โปรตีน (ม่วง)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"300\" height=\"110\" fill=\"#F8FAFC\" rx=\"12\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n          <!-- Tube 1: Iodine -> Blue -->\n          <rect x=\"40\" y=\"25\" width=\"22\" height=\"60\" rx=\"11\" fill=\"#E2E8F0\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n          <rect x=\"42\" y=\"50\" width=\"18\" height=\"33\" rx=\"9\" fill=\"#1E3A8A\"/>\n          <text x=\"51\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#1E3A8A\" text-anchor=\"middle\">แป้ง (น้ำเงิน)</text>\n          <!-- Tube 2: Benedict -> Orange -->\n          <rect x=\"140\" y=\"25\" width=\"22\" height=\"60\" rx=\"11\" fill=\"#E2E8F0\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n          <rect x=\"142\" y=\"50\" width=\"18\" height=\"33\" rx=\"9\" fill=\"#EA580C\"/>\n          <text x=\"151\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#EA580C\" text-anchor=\"middle\">น้ำตาล (ส้มอิฐ)</text>\n          <!-- Tube 3: Biuret -> Violet -->\n          <rect x=\"235\" y=\"25\" width=\"22\" height=\"60\" rx=\"11\" fill=\"#E2E8F0\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n          <rect x=\"237\" y=\"50\" width=\"18\" height=\"33\" rx=\"9\" fill=\"#9333EA\"/>\n          <text x=\"246\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#7E22CE\" text-anchor=\"middle\">โปรตีน (ม่วง)</text>\n        </svg>\n        "
  },
  {
    "id": "s_2",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ระบบร่างกายมนุษย์",
    "stem": "หัวใจห้องใดของมนุษย์มีผนังหนาที่สุด และทำหน้าที่ใด?",
    "choices": [
      {
        "text": "ห้องบนขวา - รับเลือดเสียจากร่างกาย",
        "isCorrect": false
      },
      {
        "text": "ห้องล่างซ้าย - สูบฉีดเลือดดีไปเลี้ยงทั่วร่างกาย",
        "isCorrect": true
      },
      {
        "text": "ห้องล่างขวา - ส่งเลือดไปฟอกที่ปอด",
        "isCorrect": false
      },
      {
        "text": "ห้องบนซ้าย - รับเลือดดีจากปอด",
        "isCorrect": false
      }
    ],
    "metaphor": "เหมือนปั๊มน้ำแรงดันสูง! ห้องล่างซ้ายต้องบีบเลือดส่งไปถึงปลายนิ้วเท้า ผนังกล้ามเนื้อจึงต้องหนาและแข็งแรงที่สุด!",
    "stepsMath": "ห้องล่างซ้าย (Left Ventricle) ผนังหนาสุดเพื่อฉีดเลือดไปทั่วร่าง",
    "proShortcut": "จำง่ายๆ: ล่างซ้าย = ซูเปอร์ปั๊มไปทั่วตัว!",
    "ttsStem": "หัวใจห้องใดของมนุษย์มีผนังหนาที่สุด และทำหน้าที่ใด",
    "ttsExplanation": "หัวใจห้องล่างซ้าย มีผนังหนาที่สุด เพื่อสูบฉีดเลือดไปเลี้ยงทั่วร่างกายครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_3",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "พืชและการสังเคราะห์ด้วยแสง",
    "stem": "แก๊สชนิดใดที่พืชใช้ในกระบวนการสังเคราะห์ด้วยแสง และแก๊สใดที่เกิดขึ้นเป็นผลพลอยได้?",
    "choices": [
      {
        "text": "ใช้ O₂ ได้ CO₂",
        "isCorrect": false
      },
      {
        "text": "ใช้ CO₂ ได้ O₂",
        "isCorrect": true
      },
      {
        "text": "ใช้ N₂ ได้ O₂",
        "isCorrect": false
      },
      {
        "text": "ใช้ H₂ ได้ CO₂",
        "isCorrect": false
      }
    ],
    "metaphor": "ต้นไม้เป็นเพื่อนรักของโลก! เขาช่วยสูดคาร์บอนไดออกไซด์เข้าไป แล้วคายออกซิเจนบริสุทธิ์มาให้เราหายใจ!",
    "stepsMath": "สมการ: CO₂ + น้ำ + แสง ➔ น้ำตาลกลูโคส + O₂",
    "proShortcut": "พืชกินคาร์บอน (CO₂) คายออกซิเจน (O₂)",
    "ttsStem": "แก๊สชนิดใดที่พืชใช้สังเคราะห์ด้วยแสง และได้แก๊สใดออกมา",
    "ttsExplanation": "พืชใช้แก๊สคาร์บอนไดออกไซด์ และคายแก๊สออกซิเจนออกมาครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_4",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "เคมี: การแยกสาร",
    "stem": "วิธีใดเหมาะสมที่สุดในการแยก 'ผงเหล็ก' ออกจาก 'ทราย'?",
    "choices": [
      {
        "text": "การร่อนด้วยตะแกรง",
        "isCorrect": false
      },
      {
        "text": "การใช้แม่เหล็กดูด",
        "isCorrect": true
      },
      {
        "text": "การละลายน้ำแล้วกรอง",
        "isCorrect": false
      },
      {
        "text": "การระเหยแห้ง",
        "isCorrect": false
      }
    ],
    "metaphor": "แม่เหล็กมีพลังดึงดูดเฉพาะเหล็ก ทรายไม่ถูกดูด จึงแยกได้ในพริบตาเดียว!",
    "stepsMath": "ผงเหล็กมีสมบัติเป็นสารแม่เหล็ก จึงใช้แม่เหล็กดูดแยกออกจากทรายได้ทันที",
    "proShortcut": "เจอสารมีเหล็กปน ➔ ใช้แม่เหล็กดูดไวที่สุด!",
    "ttsStem": "วิธีใดเหมาะสมที่สุดในการแยกผงเหล็กออกจากทราย",
    "ttsExplanation": "ใช้แม่เหล็กดูด เพราะเหล็กจะถูกแม่เหล็กดึงดูดแยกออกจากทรายได้ทันทีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_5",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ฟิสิกส์: วงจรไฟฟ้า",
    "stem": "การต่อหลอดไฟในบ้านเรือน นิยมต่อแบบใด เพราะเหตุใด?",
    "choices": [
      {
        "text": "แบบอนุกรม เพราะประหยัดสายไฟ",
        "isCorrect": false
      },
      {
        "text": "แบบขนาน เพราะเมื่อหลอดหนึ่งขาด หลอดอื่นยังสว่างอยู่",
        "isCorrect": true
      },
      {
        "text": "แบบอนุกรม เพื่อให้ได้กระแสไฟเท่ากัน",
        "isCorrect": false
      },
      {
        "text": "แบบขนาน เพื่อให้หลอดไฟสว่างน้อยลง",
        "isCorrect": false
      }
    ],
    "metaphor": "ลองนึกภาพถ้าต่อแบบอนุกรม หลอดไฟห้องน้ำขาด หลอดไฟทั้งบ้านจะดับหมดเลย! บ้านเราจึงต้องต่อแบบขนาน แยกอิสระต่อกัน!",
    "stepsMath": "การต่อแบบขนาน: แต่ละหลอดรับแรงดันเท่ากัน (220V) และทำงานแยกกันได้",
    "proShortcut": "ไฟบ้าน = ต่อขนาน หลอดหนึ่งดับ หลอดอื่นไม่ดับ!",
    "ttsStem": "การต่อหลอดไฟในบ้านเรือน นิยมต่อแบบใด เพราะเหตุใด",
    "ttsExplanation": "ต่อแบบขนาน เพราะหากหลอดใดหลอดหนึ่งขาด หลอดอื่นๆ จะยังคงสว่างอยู่ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_6",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ชีววิทยา",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_7",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ชีววิทยา",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_8",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ชีววิทยา",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_9",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ชีววิทยา",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_10",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ชีววิทยา",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_11",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ชีววิทยา",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_12",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ชีววิทยา",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_13",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ชีววิทยา",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_14",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ชีววิทยา",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_15",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ชีววิทยา",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_16",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ชีววิทยา",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_17",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ชีววิทยา",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_18",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ชีววิทยา",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_19",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ชีววิทยา",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_20",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ชีววิทยา",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_21",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "เคมีและสาร",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_22",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "เคมีและสาร",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_23",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "เคมีและสาร",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_24",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "เคมีและสาร",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_25",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "เคมีและสาร",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_26",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "เคมีและสาร",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_27",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "เคมีและสาร",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_28",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "เคมีและสาร",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_29",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "เคมีและสาร",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_30",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "เคมีและสาร",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_31",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "เคมีและสาร",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_32",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "เคมีและสาร",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_33",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "เคมีและสาร",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_34",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "เคมีและสาร",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_35",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "เคมีและสาร",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_36",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ฟิสิกส์และดาราศาสตร์",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_37",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ฟิสิกส์และดาราศาสตร์",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_38",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ฟิสิกส์และดาราศาสตร์",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_39",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ฟิสิกส์และดาราศาสตร์",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_40",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ฟิสิกส์และดาราศาสตร์",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_41",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ฟิสิกส์และดาราศาสตร์",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_42",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ฟิสิกส์และดาราศาสตร์",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_43",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ฟิสิกส์และดาราศาสตร์",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_44",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ฟิสิกส์และดาราศาสตร์",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_45",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ฟิสิกส์และดาราศาสตร์",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_46",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ฟิสิกส์และดาราศาสตร์",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_47",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ฟิสิกส์และดาราศาสตร์",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_48",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ฟิสิกส์และดาราศาสตร์",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_49",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ฟิสิกส์และดาราศาสตร์",
    "stem": "การเปลี่ยนแปลงในข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (เกิดสารใหม่)?",
    "choices": [
      {
        "text": "การละลายของน้ำแข็ง",
        "isCorrect": false
      },
      {
        "text": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "text": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "text": "การฉีกกระดาษ",
        "isCorrect": false
      }
    ],
    "metaphor": "การเกิดสนิมเป็นสารใหม่ที่ไม่สามารถย้อนกลับเป็นเหล็กเดิมได้ง่ายๆ!",
    "stepsMath": "สนิมเหล็ก = สารใหม่ (Fe₂O₃)",
    "proShortcut": "เกิดกลิ่น/สีเปลี่ยน/เกิดตะกอน = ทางเคมี",
    "ttsStem": "ข้อใดเป็นการเปลี่ยนแปลงทางเคมี",
    "ttsExplanation": "การเกิดสนิมเหล็กเป็นการเปลี่ยนแปลงทางเคมีครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "s_50",
    "subject": "science",
    "subjectName": "🔬 วิทยาศาสตร์ ม.1 ทั่วไป",
    "topic": "ฟิสิกส์และดาราศาสตร์",
    "stem": "ดาวเคราะห์ดวงใดในระบบสุริยะที่มีขนาดใหญ่ที่สุด?",
    "choices": [
      {
        "text": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "text": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "text": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "text": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "metaphor": "ดาวพฤหัสเป็นพี่ยักษ์ใหญ่แห่งระบบสุริยะ!",
    "stepsMath": "ดาวพฤหัสบดีมีมวลและขนาดใหญ่ที่สุด",
    "proShortcut": "จำ: พุธ ศุกร์ โลก อังคาร พฤหัส(ใหญ่สุด)",
    "ttsStem": "ดาวเคราะห์ดวงใดในระบบสุริยะใหญ่ที่สุด",
    "ttsExplanation": "ดาวพฤหัสบดีมีขนาดใหญ่ที่สุดในระบบสุริยะครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#F0F9FF\" rx=\"12\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n          <!-- Beaker -->\n          <rect x=\"80\" y=\"20\" width=\"120\" height=\"75\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\" rx=\"3\"/>\n          <rect x=\"82\" y=\"45\" width=\"116\" height=\"48\" fill=\"#7DD3FC\" opacity=\"0.5\"/>\n          <line x1=\"82\" y1=\"45\" x2=\"198\" y2=\"45\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n          <!-- Floating block -->\n          <rect x=\"120\" y=\"32\" width=\"40\" height=\"40\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n          <text x=\"140\" y=\"56\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">D=0.6</text>\n          <text x=\"40\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369A1\">น้ำ D=1.0</text>\n          <text x=\"40\" y=\"70\" font-size=\"9\" fill=\"#64748B\">เบากว่า ➔ ลอย!</text>\n        </svg>\n        "
  },
  {
    "id": "e_1",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Tenses: Past Simple",
    "stem": "Yesterday, my brother and I ________ to the cinema to watch an animated movie.",
    "choices": [
      {
        "text": "go",
        "isCorrect": false
      },
      {
        "text": "went",
        "isCorrect": true
      },
      {
        "text": "going",
        "isCorrect": false
      },
      {
        "text": "goes",
        "isCorrect": false
      }
    ],
    "metaphor": "มีคำบอกเวลาชัดเจนคือ 'Yesterday' (เมื่อวานนี้) เหตุการณ์จบไปแล้วในอดีต ต้องใช้กริยาช่อง 2!",
    "stepsMath": "Yesterday = อดีต ➔ go เปลี่ยนเป็น went (V.2)",
    "proShortcut": "เห็น Yesterday, Last..., ...ago ➔ กริยาช่อง 2 ทันที!",
    "ttsStem": "Yesterday, my brother and I went to the cinema. ข้อนี้ควรเติมกริยาตัวใด",
    "ttsExplanation": "มีคำว่า เยสเตอร์เดย์ ในอดีต ต้องใช้กริยาช่องสอง คือ เว้นท์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_2",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Subject-Verb Agreement",
    "stem": "Neither Peter nor his friends ________ coming to the party tonight.",
    "choices": [
      {
        "text": "is",
        "isCorrect": false
      },
      {
        "text": "are",
        "isCorrect": true
      },
      {
        "text": "was",
        "isCorrect": false
      },
      {
        "text": "be",
        "isCorrect": false
      }
    ],
    "metaphor": "เมื่อเจอ Neither... nor... กริยาจะตามใจ 'ประธานตัวหลังสุด' ซึ่งก็คือ his friends (พหูพจน์หลายคน)!",
    "stepsMath": "ประธานหลัง nor คือ friends เป็นพหูพจน์ ➔ ใช้ are",
    "proShortcut": "Neither A nor B ➔ ผันตาม B!",
    "ttsStem": "Neither Peter nor his friends are coming. ควรใช้กริยาตัวใด",
    "ttsExplanation": "ผันตามประธานตัวหลัง คือ ฮิส เฟรนด์ส พหูพจน์ จึงใช้ อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_3",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Prepositions of Time",
    "stem": "The train will arrive at the station ________ 8:30 a.m. sharp.",
    "choices": [
      {
        "text": "in",
        "isCorrect": false
      },
      {
        "text": "on",
        "isCorrect": false
      },
      {
        "text": "at",
        "isCorrect": true
      },
      {
        "text": "for",
        "isCorrect": false
      }
    ],
    "metaphor": "เวลาเป๊ะๆ บนหน้าปัดนาฬิกา ภาษาอังกฤษใช้ 'at' เสมอ!",
    "stepsMath": "at + เวลาเฉพาะเจาะจง (at 8:30 a.m.) / on + วัน / in + เดือน, ปี",
    "proShortcut": "จำกลอน: In เดือนปีฤดู • On วัน • At นาฬิกาเป๊ะ!",
    "ttsStem": "The train will arrive at the station at 8:30 a.m. ควรใช้คำบุพบทใด",
    "ttsExplanation": "เวลาบนนาฬิกา ใช้คำว่า แอท เสมอครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_4",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Signs & Notices",
    "stem": "A sign says: 'DO NOT FEED THE ANIMALS'. What does it mean?",
    "choices": [
      {
        "text": "You can give bread to the monkeys.",
        "isCorrect": false
      },
      {
        "text": "You must not give any food to the animals.",
        "isCorrect": true
      },
      {
        "text": "You should buy food for the zoo keeper.",
        "isCorrect": false
      },
      {
        "text": "Animals are very hungry.",
        "isCorrect": false
      }
    ],
    "metaphor": "Feed แปลว่าให้อาหาร มีคำว่า Do not แปลว่า ห้ามเด็ดขาด!",
    "stepsMath": "Do not feed = ห้ามให้อาหารสัตว์",
    "proShortcut": "Do not = ห้ามทำสิ่งนั้น",
    "ttsStem": "A sign says Do not feed the animals. แปลว่าอะไร",
    "ttsExplanation": "แปลว่า ห้ามให้อาหารแก่สัตว์ทุกชนิดครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_5",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Vocabulary: Context Clues",
    "stem": "The weather was so chilly that Jane had to put on her thick jacket. What does 'chilly' mean?",
    "choices": [
      {
        "text": "very hot",
        "isCorrect": false
      },
      {
        "text": "cold",
        "isCorrect": true
      },
      {
        "text": "rainy",
        "isCorrect": false
      },
      {
        "text": "sunny",
        "isCorrect": false
      }
    ],
    "metaphor": "ดูบริบท: หนาวขนาดที่ต้องใส่เสื้อกันหนาวหนาๆ (thick jacket) แปลว่า chilly ต้องแปลว่าหนาวเย็น!",
    "stepsMath": "chilly = หนาวเย็น (synonym: cold)",
    "proShortcut": "บริบทใส่ jacket ➔ แปลว่า cold!",
    "ttsStem": "What does chilly mean in this sentence",
    "ttsExplanation": "คำว่า ชิลลี่ ในบริบทนี้แปลว่า หนาวเย็น หรือ โคลด์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_6",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_7",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_8",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_9",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_10",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_11",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_12",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_13",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_14",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_15",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_16",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_17",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_18",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_19",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_20",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_21",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_22",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_23",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_24",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_25",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Grammar",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_26",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Vocabulary",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_27",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Vocabulary",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_28",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Vocabulary",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_29",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Vocabulary",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_30",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Vocabulary",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_31",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Vocabulary",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_32",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Vocabulary",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_33",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Vocabulary",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_34",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Vocabulary",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_35",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Vocabulary",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_36",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Vocabulary",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_37",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Vocabulary",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_38",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Vocabulary",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_39",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Vocabulary",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_40",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Vocabulary",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_41",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Conversation",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_42",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Conversation",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_43",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Conversation",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_44",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Conversation",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_45",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Conversation",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_46",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Conversation",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_47",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Conversation",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_48",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Conversation",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_49",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Conversation",
    "stem": "She is looking forward to ________ her grandparents next week.",
    "choices": [
      {
        "text": "visit",
        "isCorrect": false
      },
      {
        "text": "visiting",
        "isCorrect": true
      },
      {
        "text": "visited",
        "isCorrect": false
      },
      {
        "text": "visits",
        "isCorrect": false
      }
    ],
    "metaphor": "สำนวน look forward to ต้องตามด้วย V.ing เสมอ!",
    "stepsMath": "look forward to + V.ing (Gerund)",
    "proShortcut": "look forward to + V.ing จำให้ขึ้นใจ!",
    "ttsStem": "She is looking forward to visiting her grandparents. เติมคำใด",
    "ttsExplanation": "สำนวน ลุค ฟอร์เวิร์ด ทู ตามด้วย กริยาเติม ไอเอ็นจี ตอบ วิสิตติ้ง ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "e_50",
    "subject": "english",
    "subjectName": "🇬🇧 ภาษาอังกฤษ ม.1 ทั่วไป",
    "topic": "Conversation",
    "stem": "'Can you lend me your pencil?' - '________.'",
    "choices": [
      {
        "text": "Sure, here you are.",
        "isCorrect": true
      },
      {
        "text": "No, I am busy.",
        "isCorrect": false
      },
      {
        "text": "Thank you.",
        "isCorrect": false
      },
      {
        "text": "You are welcome.",
        "isCorrect": false
      }
    ],
    "metaphor": "การตอบรับอย่างสุภาพเมื่อเพื่อนขอยืมของ: Sure, here you are!",
    "stepsMath": "ตอบรับการให้ยืม: ยินดี นี่จ้ะ",
    "proShortcut": "ตอบรับสุภาพ = Sure, here you are.",
    "ttsStem": "ขอยืมดินสอ ควรตอบรับอย่างไร",
    "ttsExplanation": "ตอบ ชัวร์ เฮียร์ ยู อาร์ ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FAF5FF\" rx=\"12\" stroke=\"#E9D5FF\" stroke-width=\"1.5\"/>\n          <line x1=\"30\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#A855F7\" stroke-width=\"3\"/>\n          <!-- Long Action -->\n          <rect x=\"50\" y=\"30\" width=\"130\" height=\"40\" rx=\"8\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"47\" font-size=\"9\" fill=\"#5B21B6\" text-anchor=\"middle\">กำลังอ่านหนังสือ (ยาว)</text>\n          <text x=\"115\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">was reading</text>\n          <!-- Short Interrupting Action -->\n          <polygon points=\"190,25 210,50 195,50 205,75 185,55 198,55\" fill=\"#EF4444\"/>\n          <text x=\"245\" y=\"47\" font-size=\"9\" fill=\"#B91C1C\" text-anchor=\"middle\">ดังแทรกขึ้นมา (สั้น)</text>\n          <text x=\"245\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#991B1B\" text-anchor=\"middle\">rang! (V.2)</text>\n        </svg>\n        "
  },
  {
    "id": "t_1",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา: คำเป็น คำตาย",
    "stem": "ข้อใดเป็น 'คำตาย' ทุกคำ?",
    "choices": [
      {
        "text": "กบ บท กัก",
        "isCorrect": true
      },
      {
        "text": "กิน เดิน นอน",
        "isCorrect": false
      },
      {
        "text": "สาว สวย ใส",
        "isCorrect": false
      },
      {
        "text": "มา หา ดู",
        "isCorrect": false
      }
    ],
    "metaphor": "คำตายเหมือนคนหยุดหายใจเร็วๆ! สะกดด้วยแม่ กบด (กบ, กด, กบ) หรือสระเสียงสั้นไม่มีตัวสะกด!",
    "stepsMath": "กบ (แม่กบ), บท (แม่กด), กัก (แม่กก) ➔ เป็นคำตายทั้งหมด",
    "proShortcut": "จำ: สะกดด้วย 'กบด' (กบฏ) ต้องตาย!",
    "ttsStem": "ข้อใดเป็นคำตายทุกคำ",
    "ttsExplanation": "คำที่สะกดด้วย แม่ กก, กด, กบ เป็นคำตาย ตอบ กบ บท กัก ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_2",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา: ไตรยางศ์ (อักษร 3 หมู่)",
    "stem": "พยัญชนะในข้อใดจัดเป็น 'อักษรสูง' ทั้งหมด?",
    "choices": [
      {
        "text": "ข ฉ ถ ผ ฝ ส ห",
        "isCorrect": true
      },
      {
        "text": "ก จ ด ต บ ป อ",
        "isCorrect": false
      },
      {
        "text": "ค ง ช ซ ท น พ",
        "isCorrect": false
      },
      {
        "text": "ม ย ร ล ว ฬ ฮ",
        "isCorrect": false
      }
    ],
    "metaphor": "ท่องจำแบบคนโบราณ: ผี ฝาก ถุง ข้าว สาร ให้ ฉัน! ล้วนเป็นอักษรสูงทั้งหมด!",
    "stepsMath": "อักษรสูงมี 11 ตัว: ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
    "proShortcut": "ท่อง: ผี ฝาก ถุง ข้าว สาร ให้ ฉัน",
    "ttsStem": "พยัญชนะในข้อใดจัดเป็นอักษรสูงทั้งหมด",
    "ttsExplanation": "ท่องว่า ผี ฝาก ถุง ข้าว สาร ให้ ฉัน ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_3",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา: ประโยคความซ้อน",
    "stem": "ข้อใดเป็น 'ประโยคความซ้อน'?",
    "choices": [
      {
        "text": "ฝนตกหนักน้ำจึงท่วม",
        "isCorrect": false
      },
      {
        "text": "คน<u>ที่</u>ขยันย่อมประสบความสำเร็จ",
        "isCorrect": true
      },
      {
        "text": "พ่อและแม่ไปทำงาน",
        "isCorrect": false
      },
      {
        "text": "เขาวิ่งออกกำลังกายทุกเช้า",
        "isCorrect": false
      }
    ],
    "metaphor": "มีคำเชื่อม 'ที่' ทำหน้าที่เชื่อมประโยคย่อยมาขยายประธาน ประโยคซ้อนสองชั้น!",
    "stepsMath": "มีประพันธสรรพนาม 'ที่' เชื่อมอนุประโยค ➔ ประโยคความซ้อน",
    "proShortcut": "เจอ ที่ ซึ่ง อัน ผู้ = ประโยคความซ้อน!",
    "ttsStem": "ข้อใดเป็นประโยคความซ้อน",
    "ttsExplanation": "ประโยคที่มีคำว่า ที่ เชื่อมขยาย จัดเป็นประโยคความซ้อน ตอบข้อสองครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_4",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "คำราชาศัพท์",
    "stem": "คำราชาศัพท์สำหรับคำว่า 'ดวงตา' ของพระมหากษัตริย์ คือข้อใด?",
    "choices": [
      {
        "text": "พระเนตร",
        "isCorrect": true
      },
      {
        "text": "พระกรรณ",
        "isCorrect": false
      },
      {
        "text": "พระนาสิก",
        "isCorrect": false
      },
      {
        "text": "พระโอษฐ์",
        "isCorrect": false
      }
    ],
    "metaphor": "พระเนตร = ตา, พระกรรณ = หู, พระนาสิก = จมูก, พระโอษฐ์ = ปาก จำให้แม่น!",
    "stepsMath": "พระเนตร หมายถึง ดวงตา",
    "proShortcut": "เนตร = ตา / กรรณ = หู / นาสิก = จมูก",
    "ttsStem": "คำราชาศัพท์สำหรับคำว่า ดวงตา คือข้อใด",
    "ttsExplanation": "ดวงตา คือ พระเนตร ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_5",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "สำนวน สุภาษิต",
    "stem": "สำนวนใดมีความหมายตรงกับ 'การทำสิ่งที่ยากเกินความสามารถ หรือลงทุนมากแต่ได้ผลตอบแทนน้อย'?",
    "choices": [
      {
        "text": "ขี่ช้างจับตั๊กแตน",
        "isCorrect": true
      },
      {
        "text": "น้ำขึ้นให้รีบตัก",
        "isCorrect": false
      },
      {
        "text": "ไก่เห็นตีนงู งูเห็นนมไก่",
        "isCorrect": false
      },
      {
        "text": "ชี้โพรงให้กระรอก",
        "isCorrect": false
      }
    ],
    "metaphor": "ช้างตัวเบ้อเริ่ม เอาไปวิ่งไล่จับตั๊กแตนตัวนิดเดียว ลงทุนมหาศาลแต่ได้ผลนิดเดียว!",
    "stepsMath": "ขี่ช้างจับตั๊กแตน = ลงทุนมากแต่ได้ผลน้อย",
    "proShortcut": "ช้างใหญ่ vs ตั๊กแตนเล็ก = ขี่ช้างจับตั๊กแตน",
    "ttsStem": "สำนวนใดหมายถึง ลงทุนมากแต่ได้ผลน้อย",
    "ttsExplanation": "สำนวน ขี่ช้างจับตั๊กแตน ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_6",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_7",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_8",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_9",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_10",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_11",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_12",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_13",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_14",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_15",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_16",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_17",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_18",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_19",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_20",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_21",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_22",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_23",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_24",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_25",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "หลักภาษา",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_26",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "การใช้ภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_27",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "การใช้ภาษา",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_28",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "การใช้ภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_29",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "การใช้ภาษา",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_30",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "การใช้ภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_31",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "การใช้ภาษา",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_32",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "การใช้ภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_33",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "การใช้ภาษา",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_34",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "การใช้ภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_35",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "การใช้ภาษา",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_36",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "การใช้ภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_37",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "การใช้ภาษา",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_38",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "การใช้ภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_39",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "การใช้ภาษา",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_40",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "การใช้ภาษา",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_41",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "วรรณคดีและการอ่าน",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_42",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "วรรณคดีและการอ่าน",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_43",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "วรรณคดีและการอ่าน",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_44",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "วรรณคดีและการอ่าน",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_45",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "วรรณคดีและการอ่าน",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_46",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "วรรณคดีและการอ่าน",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_47",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "วรรณคดีและการอ่าน",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_48",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "วรรณคดีและการอ่าน",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_49",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "วรรณคดีและการอ่าน",
    "stem": "คำว่า 'มงคล' สะกดด้วยมาตราแม่ใด?",
    "choices": [
      {
        "text": "แม่กน",
        "isCorrect": true
      },
      {
        "text": "แม่กม",
        "isCorrect": false
      },
      {
        "text": "แม่เกย",
        "isCorrect": false
      },
      {
        "text": "แม่กง",
        "isCorrect": false
      }
    ],
    "metaphor": "มงคล ออกเสียง ล เหมือน น หนู สะกด อยู่ในแม่กน!",
    "stepsMath": "ตัวสะกด ล ลิง จัดอยู่ในมาตราแม่กน",
    "proShortcut": "ล ลิง = แม่กน",
    "ttsStem": "คำว่า มงคล สะกดด้วยมาตราแม่ใด",
    "ttsExplanation": "คำว่า มงคล สะกดด้วยแม่กน ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "t_50",
    "subject": "thai",
    "subjectName": "📖 ภาษาไทย ม.1 ทั่วไป",
    "topic": "วรรณคดีและการอ่าน",
    "stem": "คำประพันธ์ประเภท 'กาพย์ยานี 11' มีวรรคหน้ากี่คำและวรรคหลังกี่คำ?",
    "choices": [
      {
        "text": "หน้า 5 หลัง 6",
        "isCorrect": true
      },
      {
        "text": "หน้า 6 หลัง 5",
        "isCorrect": false
      },
      {
        "text": "หน้า 4 หลัง 7",
        "isCorrect": false
      },
      {
        "text": "หน้า 5 หลัง 5",
        "isCorrect": false
      }
    ],
    "metaphor": "กาพย์ยานี 11 ท่องง่ายๆ: หน้าห้า หลังหก รวมกันได้สิบเอ็ดพอดี!",
    "stepsMath": "วรรคหน้า 5 คำ วรรคหลัง 6 คำ รวมเป็น 11",
    "proShortcut": "หน้า 5 หลัง 6 = ยานี 11",
    "ttsStem": "กาพย์ยานี 11 มีวรรคหน้ากี่คำและวรรคหลังกี่คำ",
    "ttsExplanation": "วรรคหน้าห้าคำ วรรคหลังหกคำ รวมเป็นสิบเอ็ดคำครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 300 100\" class=\"w-full max-w-sm h-24\">\n          <rect width=\"300\" height=\"100\" fill=\"#FDF2F8\" rx=\"12\" stroke=\"#FBCFE8\" stroke-width=\"1.5\"/>\n          <!-- Block 1 -->\n          <rect x=\"15\" y=\"30\" width=\"115\" height=\"40\" rx=\"8\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n          <text x=\"72\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">ครูชมเชยนักเรียน</text>\n          <!-- Connector -->\n          <circle cx=\"145\" cy=\"50\" r=\"14\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\" text-anchor=\"middle\">ที่</text>\n          <!-- Block 2 -->\n          <rect x=\"165\" y=\"30\" width=\"120\" height=\"40\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#EC4899\" stroke-width=\"1.5\"/>\n          <text x=\"225\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#9D174D\" text-anchor=\"middle\">ตั้งใจอ่านหนังสือ</text>\n        </svg>\n        "
  },
  {
    "id": "soc_1",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ศาสนา ศีลธรรม",
    "stem": "หลักธรรม 'อริยสัจ 4' ข้อใดหมายถึง 'ความจริงว่าด้วยหนทางแห่งการดับทุกข์'?",
    "choices": [
      {
        "text": "ทุกข์",
        "isCorrect": false
      },
      {
        "text": "สมุทัย",
        "isCorrect": false
      },
      {
        "text": "นิโรธ",
        "isCorrect": false
      },
      {
        "text": "มรรค",
        "isCorrect": true
      }
    ],
    "metaphor": "จำแบบสเต็ปคุณหมอ: ทุกข์คืออาการป่วย, สมุทัยคือสาเหตุของเชื้อโรค, นิโรธคือการหายป่วย, และมรรคคือยาวิเศษและวิธีรักษา!",
    "stepsMath": "มรรค = หนทางปฏิบัติเพื่อดับทุกข์ (อริยมรรคมีองค์ 8)",
    "proShortcut": "มรรค = มรรคา = ทางเดินดับทุกข์",
    "ttsStem": "อริยสัจ 4 ข้อใดหมายถึง หนทางแห่งการดับทุกข์",
    "ttsExplanation": "หนทางแห่งการดับทุกข์คือ มรรค ตอบข้อสี่ครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_2",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "หน้าที่พลเมือง",
    "stem": "อำนาจอธิปไตยของประเทศไทยแบ่งออกเป็น 3 ฝ่าย ข้อใดจับคู่อำนาจกับองค์กรผู้ใช้อำนาจได้ถูกต้อง?",
    "choices": [
      {
        "text": "อำนาจนิติบัญญัติ - รัฐสภา",
        "isCorrect": true
      },
      {
        "text": "อำนาจบริหาร - ศาลยุติธรรม",
        "isCorrect": false
      },
      {
        "text": "อำนาจตุลาการ - คณะรัฐมนตรี",
        "isCorrect": false
      },
      {
        "text": "อำนาจนิติบัญญัติ - นายกรัฐมนตรี",
        "isCorrect": false
      }
    ],
    "metaphor": "นิติบัญญัติ = บัญญัติกฎหมาย = รัฐสภา (ส.ส. และ ส.ว.) / บริหาร = นายกฯและ ครม. / ตุลาการ = ศาลตัดสินความ!",
    "stepsMath": "อำนาจนิติบัญญัติใช้ผ่านรัฐสภา",
    "proShortcut": "นิติบัญญัติ-สภา • บริหาร-รัฐบาล • ตุลาการ-ศาล",
    "ttsStem": "อำนาจอธิปไตย 3 ฝ่าย ข้อใดจับคู่ถูกต้อง",
    "ttsExplanation": "อำนาจนิติบัญญัติใช้ผ่านทางรัฐสภา ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_3",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "เศรษฐศาสตร์: เศรษฐกิจพอเพียง",
    "stem": "ข้อใดจัดเป็นองค์ประกอบของ '3 ห่วง' ในปรัชญาเศรษฐกิจพอเพียง?",
    "choices": [
      {
        "text": "ความพอประมาณ ความมีเหตุผล มีภูมิคุ้มกันในตัวที่ดี",
        "isCorrect": true
      },
      {
        "text": "เงื่อนไขความรู้ เงื่อนไขคุณธรรม ความซื่อสัตย์",
        "isCorrect": false
      },
      {
        "text": "ความร่ำรวย ความประหยัด ความขยัน",
        "isCorrect": false
      },
      {
        "text": "การลงทุน การผลิต การบริโภค",
        "isCorrect": false
      }
    ],
    "metaphor": "3 ห่วง คือ พอประมาณ มีเหตุผล มีภูมิคุ้มกัน / 2 เงื่อนไข คือ ความรู้ และ คุณธรรม!",
    "stepsMath": "3 ห่วง: พอประมาณ, มีเหตุผล, มีภูมิคุ้มกันที่ดี",
    "proShortcut": "ท่อง: พอ - มี - ภูมิ / รู้ - ธรรม",
    "ttsStem": "ข้อใดจัดเป็นองค์ประกอบของสามห่วงในเศรษฐกิจพอเพียง",
    "ttsExplanation": "สามห่วงได้แก่ พอประมาณ มีเหตุผล และมีภูมิคุ้มกันในตัวที่ดี ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_4",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ประวัติศาสตร์ไทย",
    "stem": "กษัตริย์พระองค์ใดทรงเป็นผู้สถาปนากรุงสุโขทัยเป็นราชธานี?",
    "choices": [
      {
        "text": "พ่อขุนรามคำแหงมหาราช",
        "isCorrect": false
      },
      {
        "text": "พ่อขุนศรีอินทราทิตย์",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระรามาธิบดีที่ 1 (อู่ทอง)",
        "isCorrect": false
      }
    ],
    "metaphor": "ปฐมกษัตริย์แห่งสุโขทัยคือ พ่อขุนศรีอินทราทิตย์ (พ่อขุนบางกลางหาว)! ส่วนพ่อขุนรามคำแหงทรงประดิษฐ์อักษรไทยในยุคต่อมา!",
    "stepsMath": "พ่อขุนศรีอินทราทิตย์ สถาปนากรุงสุโขทัย ราวปี พ.ศ. 1792",
    "proShortcut": "สุโขทัยเริ่มที่ พ่อขุนศรีอินทราทิตย์",
    "ttsStem": "กษัตริย์พระองค์ใดทรงสถาปนากรุงสุโขทัย",
    "ttsExplanation": "พ่อขุนศรีอินทราทิตย์ ทรงสถาปนากรุงสุโขทัย ตอบข้อสองครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_5",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ภูมิศาสตร์",
    "stem": "เส้นสมมติแนวนอนที่ลากรอบโลกแบ่งซีกโลกเหนือและซีกโลกใต้ เรียกว่าเส้นอะไร?",
    "choices": [
      {
        "text": "เส้นศูนย์สูตร (Equator)",
        "isCorrect": true
      },
      {
        "text": "เส้นเมริเดียนแรก (Prime Meridian)",
        "isCorrect": false
      },
      {
        "text": "เส้นทรอปิกออฟแคนเซอร์",
        "isCorrect": false
      },
      {
        "text": "เส้นลองจิจูด",
        "isCorrect": false
      }
    ],
    "metaphor": "เส้นแนวนอนผ่ากลางโลกเหมือนเข็มขัด เรียกว่า เส้นศูนย์สูตร (ละติจูด 0 องศา)!",
    "stepsMath": "เส้นศูนย์สูตร (Equator) แบ่งซีกโลกเหนือ-ใต้",
    "proShortcut": "เส้นนอน = ละติจูด (ศูนย์สูตร) • เส้นตั้ง = ลองจิจูด",
    "ttsStem": "เส้นสมมติแนวนอนแบ่งซีกโลกเหนือและใต้เรียกว่าเส้นใด",
    "ttsExplanation": "เส้นแนวนอนผ่ากลางโลกเรียกว่า เส้นศูนย์สูตร หรือ อีเควเตอร์ ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_6",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ศาสนา",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_7",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ศาสนา",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_8",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ศาสนา",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_9",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ศาสนา",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_10",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ศาสนา",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_11",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ศาสนา",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_12",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ศาสนา",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_13",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ศาสนา",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_14",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ศาสนา",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_15",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ศาสนา",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_16",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "หน้าที่พลเมือง",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_17",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "หน้าที่พลเมือง",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_18",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "หน้าที่พลเมือง",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_19",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "หน้าที่พลเมือง",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_20",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "หน้าที่พลเมือง",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_21",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "หน้าที่พลเมือง",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_22",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "หน้าที่พลเมือง",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_23",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "หน้าที่พลเมือง",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_24",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "หน้าที่พลเมือง",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_25",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "หน้าที่พลเมือง",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_26",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "เศรษฐศาสตร์",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_27",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "เศรษฐศาสตร์",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_28",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "เศรษฐศาสตร์",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_29",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "เศรษฐศาสตร์",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_30",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "เศรษฐศาสตร์",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_31",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "เศรษฐศาสตร์",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_32",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "เศรษฐศาสตร์",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_33",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "เศรษฐศาสตร์",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_34",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "เศรษฐศาสตร์",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_35",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "เศรษฐศาสตร์",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_36",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ประวัติศาสตร์และภูมิศาสตร์",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_37",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ประวัติศาสตร์และภูมิศาสตร์",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_38",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ประวัติศาสตร์และภูมิศาสตร์",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_39",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ประวัติศาสตร์และภูมิศาสตร์",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_40",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ประวัติศาสตร์และภูมิศาสตร์",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_41",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ประวัติศาสตร์และภูมิศาสตร์",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_42",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ประวัติศาสตร์และภูมิศาสตร์",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_43",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ประวัติศาสตร์และภูมิศาสตร์",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_44",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ประวัติศาสตร์และภูมิศาสตร์",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_45",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ประวัติศาสตร์และภูมิศาสตร์",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_46",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ประวัติศาสตร์และภูมิศาสตร์",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_47",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ประวัติศาสตร์และภูมิศาสตร์",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_48",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ประวัติศาสตร์และภูมิศาสตร์",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_49",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ประวัติศาสตร์และภูมิศาสตร์",
    "stem": "สิทธิเด็กขั้นพื้นฐานตามอนุสัญญาว่าด้วยสิทธิเด็ก มี 4 ด้าน ข้อใดไม่ใช่หนึ่งใน 4 ด้านดังกล่าว?",
    "choices": [
      {
        "text": "สิทธิที่จะมีชีวิตรอด",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะรวย",
        "isCorrect": true
      },
      {
        "text": "สิทธิที่จะได้รับการพัฒนา",
        "isCorrect": false
      },
      {
        "text": "สิทธิที่จะมีส่วนร่วม",
        "isCorrect": false
      }
    ],
    "metaphor": "สิทธิเด็ก 4 ด้านคือ อยู่รอด ได้รับการคุ้มครอง ได้รับการพัฒนา และมีส่วนร่วม (ไม่มีสิทธิที่จะรวยนะจ๊ะ)!",
    "stepsMath": "สิทธิเด็ก 4 ด้าน: รอด คุ้มครอง พัฒนา มีส่วนร่วม",
    "proShortcut": "ไม่มีคำว่าสิทธิที่จะรวย",
    "ttsStem": "ข้อใดไม่ใช่สิทธิเด็กขั้นพื้นฐานสี่ด้าน",
    "ttsExplanation": "สิทธิที่จะรวย ไม่ใช่สิทธิเด็กขั้นพื้นฐานครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  },
  {
    "id": "soc_50",
    "subject": "social",
    "subjectName": "🌏 สังคมศึกษา ม.1 ทั่วไป",
    "topic": "ประวัติศาสตร์และภูมิศาสตร์",
    "stem": "พระมหากษัตริย์พระองค์ใดทรงประกาศอิสรภาพของกรุงศรีอยุธยาที่เมืองแครง?",
    "choices": [
      {
        "text": "สมเด็จพระนเรศวรมหาราช",
        "isCorrect": true
      },
      {
        "text": "สมเด็จพระเอกาทศรถ",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "text": "สมเด็จพระนารายณ์มหาราช",
        "isCorrect": false
      }
    ],
    "metaphor": "สมเด็จพระนเรศวรมหาราชทรงหลั่งทักษิโณทกประกาศอิสรภาพที่เมืองแครงในปี พ.ศ. 2127!",
    "stepsMath": "สมเด็จพระนเรศวรมหาราชประกาศอิสรภาพ พ.ศ. 2127",
    "proShortcut": "ประกาศอิสรภาพ = พระนเรศวร",
    "ttsStem": "กษัตริย์พระองค์ใดทรงประกาศอิสรภาพที่เมืองแครง",
    "ttsExplanation": "สมเด็จพระนเรศวรมหาราช ตอบข้อแรกครับ",
    "graphicSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        ",
    "explSvg": "\n        <svg viewBox=\"0 0 280 110\" class=\"w-full max-w-sm h-28\">\n          <rect width=\"280\" height=\"110\" fill=\"#FEFCE8\" rx=\"12\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/>\n          <circle cx=\"80\" cy=\"45\" r=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <text x=\"80\" y=\"49\" font-size=\"9\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">พอประมาณ</text>\n          <circle cx=\"140\" cy=\"35\" r=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n          <text x=\"140\" y=\"39\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\" text-anchor=\"middle\">มีเหตุผล</text>\n          <circle cx=\"200\" cy=\"45\" r=\"30\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n          <text x=\"200\" y=\"49\" font-size=\"8\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">มีภูมิคุ้มกัน</text>\n          <rect x=\"40\" y=\"85\" width=\"200\" height=\"18\" rx=\"4\" fill=\"#E2E8F0\"/>\n          <text x=\"140\" y=\"98\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>\n        </svg>\n        "
  }
];
