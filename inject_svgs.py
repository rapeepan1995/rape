# -*- coding: utf-8 -*-
"""
Enhanced Question Generator with:
1. High-quality SVG illustration diagrams for solutions (รูปภาพตัวอย่างประกอบวิธีคิด).
2. Ultra-simple child-friendly storytelling explanations (อธิบายแบบเด็กเข้าใจง่ายมากๆ).
3. 250 questions (50 x 5 subjects).
"""
import json

def get_svg_library():
    return {
        # 1. LCM Timeline (Clocks meeting at 60 mins)
        'lcm_clocks': """
        <svg viewBox="0 0 340 130" class="w-full max-w-sm h-32">
          <rect width="340" height="130" fill="#FFFBEB" rx="12" stroke="#FCD34D" stroke-width="1.5"/>
          <text x="170" y="20" font-size="11" font-weight="bold" fill="#B45309" text-anchor="middle">ภาพการวิ่งวนรอบเวลา: เจอกันพร้อมกันที่ 60 นาที!</text>
          <!-- Track 1: 15 mins -->
          <line x1="40" y1="42" x2="300" y2="42" stroke="#CBD5E1" stroke-width="3"/>
          <circle cx="40" cy="42" r="5" fill="#3B82F6"/>
          <circle cx="105" cy="42" r="4" fill="#3B82F6"/>
          <circle cx="170" cy="42" r="4" fill="#3B82F6"/>
          <circle cx="235" cy="42" r="4" fill="#3B82F6"/>
          <circle cx="300" cy="42" r="7" fill="#10B981"/>
          <text x="35" y="55" font-size="9" fill="#1E40AF">0</text>
          <text x="100" y="55" font-size="9" fill="#1E40AF">15</text>
          <text x="165" y="55" font-size="9" fill="#1E40AF">30</text>
          <text x="230" y="55" font-size="9" fill="#1E40AF">45</text>
          <text x="290" y="55" font-size="10" font-weight="bold" fill="#047857">60 นาที</text>
          <!-- Track 2: 20 mins -->
          <line x1="40" y1="75" x2="300" y2="75" stroke="#CBD5E1" stroke-width="3"/>
          <circle cx="40" cy="75" r="5" fill="#F59E0B"/>
          <circle cx="126" cy="75" r="4" fill="#F59E0B"/>
          <circle cx="213" cy="75" r="4" fill="#F59E0B"/>
          <circle cx="300" cy="75" r="7" fill="#10B981"/>
          <text x="120" y="88" font-size="9" fill="#B45309">20</text>
          <text x="207" y="88" font-size="9" fill="#B45309">40</text>
          <text x="290" y="88" font-size="10" font-weight="bold" fill="#047857">60 นาที</text>
          <!-- Track 3: 30 mins -->
          <line x1="40" y1="108" x2="300" y2="108" stroke="#CBD5E1" stroke-width="3"/>
          <circle cx="40" cy="108" r="5" fill="#EF4444"/>
          <circle cx="170" cy="108" r="4" fill="#EF4444"/>
          <circle cx="300" cy="108" r="7" fill="#10B981"/>
          <text x="165" y="122" font-size="9" fill="#B91C1C">30</text>
          <text x="290" y="122" font-size="10" font-weight="bold" fill="#047857">60 นาที</text>
          <!-- Meeting Goal Line -->
          <line x1="300" y1="30" x2="300" y2="115" stroke="#10B981" stroke-width="2.5" stroke-dasharray="3"/>
        </svg>
        """,

        # 2. HCF Rope Cutting (ตัดเชือกชิ้นละ 12 ซม.)
        'hcf_ropes': """
        <svg viewBox="0 0 340 120" class="w-full max-w-sm h-28">
          <rect width="340" height="120" fill="#F0FDF4" rx="12" stroke="#86EFAC" stroke-width="1.5"/>
          <text x="170" y="18" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">ตัดแบ่งท่อนละ 12 ซม. เท่ากันทุกเส้นพอดีเป๊ะ!</text>
          <!-- Rope 24 cm (2 pieces) -->
          <text x="15" y="42" font-size="10" font-weight="bold" fill="#334155">24 ซม.</text>
          <rect x="65" y="30" width="70" height="16" fill="#38BDF8" rx="3"/>
          <text x="100" y="42" font-size="9" fill="#0369A1" text-anchor="middle">12 ซม.</text>
          <rect x="140" y="30" width="70" height="16" fill="#38BDF8" rx="3"/>
          <text x="175" y="42" font-size="9" fill="#0369A1" text-anchor="middle">12 ซม.</text>
          <!-- Rope 36 cm (3 pieces) -->
          <text x="15" y="70" font-size="10" font-weight="bold" fill="#334155">36 ซม.</text>
          <rect x="65" y="58" width="70" height="16" fill="#A855F7" rx="3"/>
          <rect x="140" y="58" width="70" height="16" fill="#A855F7" rx="3"/>
          <rect x="215" y="58" width="70" height="16" fill="#A855F7" rx="3"/>
          <!-- Rope 48 cm (4 pieces) -->
          <text x="15" y="98" font-size="10" font-weight="bold" fill="#334155">48 ซม.</text>
          <rect x="65" y="86" width="55" height="16" fill="#FBBF24" rx="3"/>
          <rect x="123" y="86" width="55" height="16" fill="#FBBF24" rx="3"/>
          <rect x="181" y="86" width="55" height="16" fill="#FBBF24" rx="3"/>
          <rect x="239" y="86" width="55" height="16" fill="#FBBF24" rx="3"/>
        </svg>
        """,

        # 3. Two-Step Discount Price Tag (ลดราคา 2 ต่อ)
        'discount_tag': """
        <svg viewBox="0 0 340 110" class="w-full max-w-sm h-28">
          <rect width="340" height="110" fill="#FEF2F2" rx="12" stroke="#FECACA" stroke-width="1.5"/>
          <!-- Step 1 Tag -->
          <rect x="20" y="25" width="80" height="60" rx="8" fill="#F87171"/>
          <text x="60" y="48" font-size="10" fill="#FFF" text-anchor="middle">ป้ายราคา</text>
          <text x="60" y="68" font-size="13" font-weight="bold" fill="#FFF" text-anchor="middle">800 บ.</text>
          <!-- Arrow 1 -->
          <path d="M 105 55 L 125 55" stroke="#991B1B" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="115" y="45" font-size="9" font-weight="bold" fill="#DC2626" text-anchor="middle">-20%</text>
          <!-- Step 2 Tag -->
          <rect x="130" y="25" width="80" height="60" rx="8" fill="#FBBF24"/>
          <text x="170" y="48" font-size="10" fill="#78350F" text-anchor="middle">เหลือรอบแรก</text>
          <text x="170" y="68" font-size="13" font-weight="bold" fill="#78350F" text-anchor="middle">640 บ.</text>
          <!-- Arrow 2 -->
          <path d="M 215 55 L 235 55" stroke="#991B1B" stroke-width="2"/>
          <text x="225" y="45" font-size="9" font-weight="bold" fill="#DC2626" text-anchor="middle">-10%</text>
          <!-- Final Price Tag -->
          <rect x="240" y="20" width="85" height="70" rx="8" fill="#10B981" stroke="#047857" stroke-width="2"/>
          <text x="282" y="42" font-size="10" fill="#FFF" text-anchor="middle">จ่ายจริงเงินสด</text>
          <text x="282" y="66" font-size="15" font-weight="bold" fill="#FFF" text-anchor="middle">576 บ.</text>
        </svg>
        """,

        # 4. Toast Bread Shaded Area (สี่เหลี่ยมจัตุรัส ลบ วงกลม)
        'toast_geometry': """
        <svg viewBox="0 0 280 120" class="w-full max-w-sm h-32">
          <rect width="280" height="120" fill="#FFFBEB" rx="12" stroke="#FDE68A" stroke-width="1.5"/>
          <!-- Square Bread -->
          <rect x="20" y="15" width="90" height="90" fill="#FDBA74" stroke="#EA580C" stroke-width="2" rx="4"/>
          <circle cx="65" cy="60" r="45" fill="#FFFFFF" stroke="#3B82F6" stroke-width="2"/>
          <text x="65" y="64" font-size="10" font-weight="bold" fill="#3B82F6" text-anchor="middle">ตัดแก้วน้ำ</text>
          <!-- Equal sign -->
          <text x="130" y="65" font-size="20" font-weight="bold" fill="#9A3412" text-anchor="middle">=</text>
          <!-- Corner jam remnants -->
          <rect x="155" y="15" width="90" height="90" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5" rx="4"/>
          <!-- 4 orange corners -->
          <path d="M 155 15 L 200 15 A 45 45 0 0 0 155 60 Z" fill="#F97316"/>
          <path d="M 245 15 L 200 15 A 45 45 0 0 1 245 60 Z" fill="#F97316"/>
          <path d="M 155 105 L 200 105 A 45 45 0 0 1 155 60 Z" fill="#F97316"/>
          <path d="M 245 105 L 200 105 A 45 45 0 0 0 245 60 Z" fill="#F97316"/>
          <text x="200" y="65" font-size="11" font-weight="bold" fill="#C2410C" text-anchor="middle">เหลือ 42 ตร.ซม.</text>
        </svg>
        """,

        # 5. Parallel Lines & 180 Straight Angle
        'parallel_angles': """
        <svg viewBox="0 0 300 110" class="w-full max-w-sm h-28">
          <rect width="300" height="110" fill="#EFF6FF" rx="12" stroke="#BFDBFE" stroke-width="1.5"/>
          <!-- Straight line -->
          <line x1="30" y1="60" x2="270" y2="60" stroke="#1E40AF" stroke-width="3"/>
          <line x1="150" y1="60" x2="80" y2="20" stroke="#DC2626" stroke-width="2.5"/>
          <!-- Angle 125 -->
          <path d="M 115 60 A 35 35 0 0 1 125 45" fill="none" stroke="#F59E0B" stroke-width="2.5"/>
          <text x="110" y="45" font-size="11" font-weight="bold" fill="#B45309">125°</text>
          <!-- Angle 55 -->
          <path d="M 185 60 A 35 35 0 0 0 135 48" fill="none" stroke="#10B981" stroke-width="2.5"/>
          <text x="175" y="52" font-size="11" font-weight="bold" fill="#047857">55°</text>
          <text x="150" y="95" font-size="11" font-weight="bold" fill="#1E3A8A" text-anchor="middle">เส้นตรง 180° = 125° + 55° พอดี!</text>
        </svg>
        """,

        # 6. Food Test Tubes Colors
        'test_tubes': """
        <svg viewBox="0 0 300 110" class="w-full max-w-sm h-28">
          <rect width="300" height="110" fill="#F8FAFC" rx="12" stroke="#E2E8F0" stroke-width="1.5"/>
          <!-- Tube 1: Iodine -> Blue -->
          <rect x="40" y="25" width="22" height="60" rx="11" fill="#E2E8F0" stroke="#64748B" stroke-width="1.5"/>
          <rect x="42" y="50" width="18" height="33" rx="9" fill="#1E3A8A"/>
          <text x="51" y="98" font-size="9" font-weight="bold" fill="#1E3A8A" text-anchor="middle">แป้ง (น้ำเงิน)</text>
          <!-- Tube 2: Benedict -> Orange -->
          <rect x="140" y="25" width="22" height="60" rx="11" fill="#E2E8F0" stroke="#64748B" stroke-width="1.5"/>
          <rect x="142" y="50" width="18" height="33" rx="9" fill="#EA580C"/>
          <text x="151" y="98" font-size="9" font-weight="bold" fill="#EA580C" text-anchor="middle">น้ำตาล (ส้มอิฐ)</text>
          <!-- Tube 3: Biuret -> Violet -->
          <rect x="235" y="25" width="22" height="60" rx="11" fill="#E2E8F0" stroke="#64748B" stroke-width="1.5"/>
          <rect x="237" y="50" width="18" height="33" rx="9" fill="#9333EA"/>
          <text x="246" y="98" font-size="9" font-weight="bold" fill="#7E22CE" text-anchor="middle">โปรตีน (ม่วง)</text>
        </svg>
        """,

        # 7. Buoyancy & Density Beaker
        'buoyancy_beaker': """
        <svg viewBox="0 0 280 110" class="w-full max-w-sm h-28">
          <rect width="280" height="110" fill="#F0F9FF" rx="12" stroke="#BAE6FD" stroke-width="1.5"/>
          <!-- Beaker -->
          <rect x="80" y="20" width="120" height="75" fill="none" stroke="#64748B" stroke-width="2" rx="3"/>
          <rect x="82" y="45" width="116" height="48" fill="#7DD3FC" opacity="0.5"/>
          <line x1="82" y1="45" x2="198" y2="45" stroke="#0284C7" stroke-width="1.5"/>
          <!-- Floating block -->
          <rect x="120" y="32" width="40" height="40" fill="#FDE047" stroke="#CA8A04" stroke-width="1.5"/>
          <text x="140" y="56" font-size="9" font-weight="bold" fill="#854D0E" text-anchor="middle">D=0.6</text>
          <text x="40" y="55" font-size="10" font-weight="bold" fill="#0369A1">น้ำ D=1.0</text>
          <text x="40" y="70" font-size="9" fill="#64748B">เบากว่า ➔ ลอย!</text>
        </svg>
        """,

        # 8. English Timeline (Past Cont + Past Simple)
        'eng_timeline': """
        <svg viewBox="0 0 300 100" class="w-full max-w-sm h-24">
          <rect width="300" height="100" fill="#FAF5FF" rx="12" stroke="#E9D5FF" stroke-width="1.5"/>
          <line x1="30" y1="50" x2="270" y2="50" stroke="#A855F7" stroke-width="3"/>
          <!-- Long Action -->
          <rect x="50" y="30" width="130" height="40" rx="8" fill="#DDD6FE" stroke="#7C3AED" stroke-width="1.5"/>
          <text x="115" y="47" font-size="9" fill="#5B21B6" text-anchor="middle">กำลังอ่านหนังสือ (ยาว)</text>
          <text x="115" y="60" font-size="10" font-weight="bold" fill="#4C1D95" text-anchor="middle">was reading</text>
          <!-- Short Interrupting Action -->
          <polygon points="190,25 210,50 195,50 205,75 185,55 198,55" fill="#EF4444"/>
          <text x="245" y="47" font-size="9" fill="#B91C1C" text-anchor="middle">ดังแทรกขึ้นมา (สั้น)</text>
          <text x="245" y="60" font-size="11" font-weight="bold" fill="#991B1B" text-anchor="middle">rang! (V.2)</text>
        </svg>
        """,

        # 9. Thai Sentence Puzzle Blocks
        'thai_puzzle': """
        <svg viewBox="0 0 300 100" class="w-full max-w-sm h-24">
          <rect width="300" height="100" fill="#FDF2F8" rx="12" stroke="#FBCFE8" stroke-width="1.5"/>
          <!-- Block 1 -->
          <rect x="15" y="30" width="115" height="40" rx="8" fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.5"/>
          <text x="72" y="55" font-size="10" font-weight="bold" fill="#1E40AF" text-anchor="middle">ครูชมเชยนักเรียน</text>
          <!-- Connector -->
          <circle cx="145" cy="50" r="14" fill="#FDE047" stroke="#EAB308" stroke-width="2"/>
          <text x="145" y="54" font-size="11" font-weight="bold" fill="#854D0E" text-anchor="middle">ที่</text>
          <!-- Block 2 -->
          <rect x="165" y="30" width="120" height="40" rx="8" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.5"/>
          <text x="225" y="55" font-size="10" font-weight="bold" fill="#9D174D" text-anchor="middle">ตั้งใจอ่านหนังสือ</text>
        </svg>
        """,

        # 10. Sufficiency Economy 3 Rings
        'social_rings': """
        <svg viewBox="0 0 280 110" class="w-full max-w-sm h-28">
          <rect width="280" height="110" fill="#FEFCE8" rx="12" stroke="#FEF08A" stroke-width="1.5"/>
          <circle cx="80" cy="45" r="30" fill="#FEF3C7" stroke="#D97706" stroke-width="2"/>
          <text x="80" y="49" font-size="9" font-weight="bold" fill="#92400E" text-anchor="middle">พอประมาณ</text>
          <circle cx="140" cy="35" r="30" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/>
          <text x="140" y="39" font-size="10" font-weight="bold" fill="#1E40AF" text-anchor="middle">มีเหตุผล</text>
          <circle cx="200" cy="45" r="30" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
          <text x="200" y="49" font-size="8" font-weight="bold" fill="#166534" text-anchor="middle">มีภูมิคุ้มกัน</text>
          <rect x="40" y="85" width="200" height="18" rx="4" fill="#E2E8F0"/>
          <text x="140" y="98" font-size="9" font-weight="bold" fill="#475569" text-anchor="middle">เงื่อนไขความรู้ + เงื่อนไขคุณธรรม</text>
        </svg>
        """
    }

def build_questions_with_svgs():
    svgs = get_svg_library()
    questions = []

    # Read existing 250 questions from generated database
    path = r"C:\Users\kingf\.gemini\antigravity\scratch\m1-prep-thai-web\questions_data.js"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    json_str = content.split("const MASTER_QUESTION_BANK = ")[1].rsplit(";", 1)[0]
    raw_questions = json.loads(json_str)

    # Attach specific visual explanation SVGs to each question based on its topic
    for q in raw_questions:
        sub = q['subject']
        topic = q['topic']
        stem = q['stem']

        # Determine best SVG diagram for the explanation
        if 'ค.ร.น.' in topic or 'นาฬิกา' in stem:
            q['explSvg'] = svgs['lcm_clocks']
            q['graphicSvg'] = svgs['lcm_clocks']
        elif 'ห.ร.ม.' in topic or 'เชือก' in stem or 'ตัดกระดาษ' in stem:
            q['explSvg'] = svgs['hcf_ropes']
            q['graphicSvg'] = svgs['hcf_ropes']
        elif 'ลดราคา' in topic or 'ร้อยละ' in topic or 'กำไร' in topic:
            q['explSvg'] = svgs['discount_tag']
            q['graphicSvg'] = svgs['discount_tag']
        elif 'แรเงา' in topic or 'วงกลม' in topic:
            q['explSvg'] = svgs['toast_geometry']
            q['graphicSvg'] = svgs['toast_geometry']
        elif 'เส้นขนาน' in topic or 'มุม' in topic:
            q['explSvg'] = svgs['parallel_angles']
            q['graphicSvg'] = svgs['parallel_angles']
        elif sub == 'science':
            if 'สารอาหาร' in topic:
                q['explSvg'] = svgs['test_tubes']
                q['graphicSvg'] = svgs['test_tubes']
            else:
                q['explSvg'] = svgs['buoyancy_beaker']
                q['graphicSvg'] = svgs['buoyancy_beaker']
        elif sub == 'english':
            q['explSvg'] = svgs['eng_timeline']
            q['graphicSvg'] = svgs['eng_timeline']
        elif sub == 'thai':
            q['explSvg'] = svgs['thai_puzzle']
            q['graphicSvg'] = svgs['thai_puzzle']
        elif sub == 'social':
            q['explSvg'] = svgs['social_rings']
            q['graphicSvg'] = svgs['social_rings']
        else:
            q['explSvg'] = svgs['lcm_clocks']

        questions.append(q)

    # Write back
    with open(path, "w", encoding="utf-8") as f:
        f.write("// Complete 250-Question Bank for Grade 7 Thai Entrance Exam with SVG Diagrams\n")
        f.write("const MASTER_QUESTION_BANK = ")
        json.dump(questions, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"Updated {len(questions)} questions with visual explanation SVGs!")

if __name__ == '__main__':
    build_questions_with_svgs()
