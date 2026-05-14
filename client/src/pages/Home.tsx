import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronDown, Heart, Zap, TrendingUp, Users } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * 心澱感應儀表板 - 醫療科技美學
 * 設計理念：精準的數據視覺化 + 溫暖的人文關懷
 * 色彩系統：深海藍 (#0F3A5F) + 翡翠綠 (#1B9B6E) + 金色 (#D4A574)
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    auc: 0,
    timeReduction: 0,
    institutions: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 數字動畫效果
  useEffect(() => {
    const animateNumbers = () => {
      let aucCount = 0;
      let timeCount = 0;
      let instCount = 0;

      const interval = setInterval(() => {
        if (aucCount < 99) aucCount += 3;
        if (timeCount < 90) timeCount += 3;
        if (instCount < 40) instCount += 1;

        setAnimatedNumbers({
          auc: Math.min(aucCount, 99),
          timeReduction: Math.min(timeCount, 90),
          institutions: Math.min(instCount, 40),
        });

        if (aucCount >= 99 && timeCount >= 90 && instCount >= 40) {
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateNumbers, 500);
    return () => clearTimeout(timer);
  }, []);

  // 市場增長數據
  const marketGrowthData = [
    { year: 1, institutions: 5 },
    { year: 2, institutions: 15 },
    { year: 3, institutions: 40 },
    { year: 4, institutions: 70 },
    { year: 5, institutions: 100 },
  ];

  // 診斷精準度數據
  const accuracyData = [
    { grade: 'Grade 0', value: 98.5 },
    { grade: 'Grade 1', value: 92.3 },
    { grade: 'Grade 2', value: 99.8 },
    { grade: 'Grade 3', value: 99.5 },
  ];

  // 客群分佈
  const customerSegments = [
    { name: '醫療院所', value: 45, color: '#0F3A5F' },
    { name: '基層診所', value: 35, color: '#1B9B6E' },
    { name: '設備製造商', value: 20, color: '#D4A574' },
  ];

  return (
    <div className="w-screen bg-background text-foreground overflow-x-hidden">
      {/* 導航欄 */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="w-full px-4 md:px-8 py-4 flex items-center justify-between max-w-full">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            <h1 className="text-xl md:text-2xl font-bold text-primary">心澱感應</h1>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#breakthrough" className="text-sm hover:text-primary transition">臨床突破</a>
            <a href="#precision" className="text-sm hover:text-primary transition">精準診斷</a>
            <a href="#market" className="text-sm hover:text-primary transition">市場前景</a>
            <a href="#contact" className="text-sm hover:text-primary transition">聯絡我們</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">合作洽詢</Button>
        </div>
      </nav>

      {/* 英雄區 */}
      <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663648593572/S8Vvc5VTCDwNSAJaHL8UKf/hero-medical-ai-ZZif8pLhxLrJt39unsH27U.webp"
            alt="Medical AI Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 md:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{color: '#2beffd'}}>
            心澱感應
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            全球首創亞洲族群專屬 AI 核醫全自動診斷系統
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm md:text-base">3 分鐘完成</span>
            <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm md:text-base">診斷免人工修正</span>
            <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm md:text-base">AUC 0.99</span>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
            了解更多
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* 12 欄 CSS Grid 容器 */}
      <div className="w-screen" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 0 }}>
        {/* 海報 1：臨床突破 */}
        <section id="breakthrough" className="col-span-12 w-screen py-16 md:py-24 bg-white">
          <div className="w-full px-4 md:px-8 grid grid-cols-12 gap-4 md:gap-8">
            <div className="col-span-12 md:col-span-6">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663648593572/S8Vvc5VTCDwNSAJaHL8UKf/time-efficiency-3gjLPYZ4WbjC9SBxd8oLaE.webp"
                alt="時間效率對比"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                三大臨床瓶頸，一個解決方案
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">高漏診率與專家短缺</h3>
                    <p className="text-muted-foreground">偏鄉缺乏核醫專家，ATTR-CM 患者錯失治療黃金期</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">極度依賴主觀判讀</h3>
                    <p className="text-muted-foreground">99m Tc-PYP 影像高度依賴醫師手動圈選，跨院一致性嚴重不足</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">流程繁瑣且效率低下</h3>
                    <p className="text-muted-foreground">單一病例耗費 1-2 小時，造成醫療院所的營運負擔</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4 bg-secondary/50 border-0">
                  <p className="text-2xl font-bold text-primary mb-2">90%+</p>
                  <p className="text-sm text-muted-foreground">診斷時間縮短</p>
                </Card>
                <Card className="p-4 bg-secondary/50 border-0">
                  <p className="text-2xl font-bold text-accent mb-2">0</p>
                  <p className="text-sm text-muted-foreground">人工修正次數</p>
                </Card>
                <Card className="p-4 bg-secondary/50 border-0">
                  <p className="text-2xl font-bold text-primary mb-2">3 分鐘</p>
                  <p className="text-sm text-muted-foreground">完整診斷</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 海報 2：精準診斷 */}
        <section id="precision" className="col-span-12 w-screen py-16 md:py-24 bg-secondary/30">
          <div className="w-full px-4 md:px-8 grid grid-cols-12 gap-4 md:gap-8">
            <div className="col-span-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
                AUC 0.99 - 超越人工判讀的精準度
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                整體平均 AUC 超越傳統人工判讀與現有國際 AI 文獻模型，顯著減少偽陰性 (False Negative)
              </p>
            </div>

            <div className="col-span-12 md:col-span-6">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663648593572/S8Vvc5VTCDwNSAJaHL8UKf/diagnostic-accuracy-Y5tqv3W46oZULbSeXtwF8g.webp"
                alt="診斷精準度"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
              <div className="bg-white rounded-lg p-8 shadow-lg mb-6">
                <div className="text-center mb-8">
                  <p className="text-6xl font-bold text-accent mb-2">
                    {animatedNumbers.auc}%
                  </p>
                  <p className="text-xl text-muted-foreground">整體診斷精準度</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Grade 2 & 3 (重症)</span>
                      <span className="text-primary font-bold">99.8%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '99.8%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Grade 1 (早期病灶)</span>
                      <span className="text-accent font-bold">92.3%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '92.3%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Grade 0 (無異常)</span>
                      <span className="text-primary font-bold">98.5%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '98.5%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-8">各 Grade 診斷精準度分佈</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={accuracyData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="grade" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="value" fill="#0F3A5F" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* 海報 3：市場前景 */}
        <section id="market" className="col-span-12 w-screen py-16 md:py-24 bg-white">
          <div className="w-full px-4 md:px-8 grid grid-cols-12 gap-4 md:gap-8">
            <div className="col-span-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
                從 5 家到百家機構 - 精準醫療普及化
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                高毛利、低邊際成本的商業成長飛輪，創造億元級產業價值
              </p>
            </div>

            <div className="col-span-12 md:col-span-6">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663648593572/S8Vvc5VTCDwNSAJaHL8UKf/market-growth-VTeKqKoCxR4iwLjrZ6YRG8.webp"
                alt="市場增長"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="text-sm text-muted-foreground mb-2">第一年</p>
                  <p className="text-3xl font-bold text-primary">
                    {animatedNumbers.institutions === 0 ? '5' : animatedNumbers.institutions < 5 ? animatedNumbers.institutions : '5'}
                  </p>
                  <p className="text-muted-foreground">家指標性機構</p>
                </div>

                <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg">
                  <p className="text-sm text-muted-foreground mb-2">第三年</p>
                  <p className="text-3xl font-bold text-accent">
                    {animatedNumbers.institutions >= 40 ? '40+' : animatedNumbers.institutions}
                  </p>
                  <p className="text-muted-foreground">家機構，創造 1,200 萬元營收</p>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="text-sm text-muted-foreground mb-2">長期目標</p>
                  <p className="text-3xl font-bold text-primary">100+</p>
                  <p className="text-muted-foreground">家機構，創造億元級產業價值</p>
                </div>
              </div>
            </div>

            <div className="col-span-12">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-8">機構導入預測</h3>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={marketGrowthData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="year" label={{ value: '年份', position: 'insideBottomRight', offset: -10 }} />
                    <YAxis label={{ value: '機構數量', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value) => `${value} 家`} />
                    <Line type="monotone" dataKey="institutions" stroke="#0F3A5F" strokeWidth={3} dot={{ fill: '#1B9B6E', r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* 技術架構區 */}
        <section className="col-span-12 w-screen py-16 md:py-24 bg-secondary/30">
          <div className="w-full px-4 md:px-8 grid grid-cols-12 gap-4 md:gap-8">
            <div className="col-span-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
                雙重深度學習引擎
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                端對端深度學習架構，從根本上重新定義核醫 AI 診斷的標準
              </p>
            </div>

            <div className="col-span-12">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663648593572/S8Vvc5VTCDwNSAJaHL8UKf/technology-stack-CWhPxYtnFG4oChSmKNg9MK.webp"
                alt="技術架構"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-primary mb-4">1</div>
                <h3 className="font-bold text-lg mb-2">輸入</h3>
                <p className="text-sm text-muted-foreground">99m Tc-PYP 醫療影像直接匯入系統，免預先處理</p>
              </Card>
              <Card className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-primary mb-4">2</div>
                <h3 className="font-bold text-lg mb-2">Wide ResNet</h3>
                <p className="text-sm text-muted-foreground">進行高維度卷積特徵擷取與自動解剖定位</p>
              </Card>
              <Card className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-accent mb-4">3</div>
                <h3 className="font-bold text-lg mb-2">Attention Gate</h3>
                <p className="text-sm text-muted-foreground">模擬專家視線，精準過濾非心臟區域雜訊</p>
              </Card>
              <Card className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-primary mb-4">4</div>
                <h3 className="font-bold text-lg mb-2">輸出</h3>
                <p className="text-sm text-muted-foreground">3 分鐘內自動生成 Grade 0-3 分級診斷報告</p>
              </Card>
            </div>
          </div>
        </section>

        {/* 商業模式區 */}
        <section className="col-span-12 w-screen py-16 md:py-24 bg-white">
          <div className="w-full px-4 md:px-8 grid grid-cols-12 gap-4 md:gap-8">
            <div className="col-span-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
                三大客群，差異化解決方案
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                針對醫療設備製造商、醫療院所及藥研機構，提供量身打造的差異化解決方案
              </p>
            </div>

            <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-8 bg-white border-2 border-primary/20 hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">醫療設備製造商</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  SDK 授權嵌入核醫掃描儀工作站，即插即用。提升設備附加價值，強化市場競爭力。
                </p>
                <p className="text-xs font-semibold text-accent">OEM / ODM 模式</p>
              </Card>

              <Card className="p-8 bg-white border-2 border-accent/20 hover:border-accent transition-colors">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent mb-4">醫療院所</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  年度授權部署版 + 雲端 API 按次計費。提升診斷精準度，縮短報告時間，降低醫療糾紛風險。
                </p>
                <p className="text-xs font-semibold text-primary">SaaS 模式</p>
              </Card>

              <Card className="p-8 bg-white border-2 border-primary/20 hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">藥研機構</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  提供標準化 99m PYP scan 影像分析服務。加速新藥審核流程，符合 FDA/EMA 標準化要求。
                </p>
                <p className="text-xs font-semibold text-accent">CRO / 國際藥廠</p>
              </Card>
            </div>

            <div className="col-span-12 mt-12">
              <div className="bg-secondary/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-8 text-center">客群分佈預測</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={customerSegments}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {customerSegments.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* 頁腳 */}
        <section id="contact" className="col-span-12 w-screen py-16 md:py-24 bg-primary text-white">
          <div className="w-full px-4 md:px-8 grid grid-cols-12 gap-4 md:gap-8">
            <div className="col-span-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                守護每一顆亞洲心臟
              </h2>
              <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
                心澱感應 Amyloid HeartSense — 從演算法到臨床落地，重塑亞洲精準醫療新未來
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg mb-12">
                聯絡我們
              </Button>
            </div>

            <div className="col-span-12 md:col-span-4">
              <h3 className="font-bold text-lg mb-4">聯絡資訊</h3>
              <p className="text-white/80 mb-2">Email: wuyw0502@gmail.com</p>
              <p className="text-white/80">合作洽詢 / 產品演示</p>
            </div>

            <div className="col-span-12 md:col-span-4">
              <h3 className="font-bold text-lg mb-4">關於我們</h3>
              <p className="text-white/80 text-sm">
                心澱感應是一個專注於亞洲族群心臟疾病 AI 診斷的創新醫療科技平台，致力於精準醫療的普及化。
              </p>
            </div>

            <div className="col-span-12 md:col-span-4">
              <h3 className="font-bold text-lg mb-4">研發團隊</h3>
              <p className="text-white/80 text-sm mb-2">吳彥雯 主任 - 亞東紀念醫院</p>
              <p className="text-white/80 text-sm">陳中明 教授 - 國立臺灣大學</p>
            </div>

            <div className="col-span-12 border-t border-white/20 pt-8 mt-8 text-center text-white/60 text-sm">
              <p>© 2026 心澱感應 Amyloid HeartSense. All rights reserved.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
