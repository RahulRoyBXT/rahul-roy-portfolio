import { createContext, useState, useContext, ReactNode } from "react";

type Language = "en" | "ja";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// English translations
export const enTranslations: Record<string, string> = {
  // Navigation
  "nav.home": "Home",
  "nav.projects": "Projects",
  "nav.skills": "Skills",
  "nav.contact": "Contact",
  "nav.openMenu": "Open menu",
  "nav.closeMenu": "Close menu",

  // Hero Section
  "hero.greeting": "Hi there! I'm Rahul",
  "hero.title": "Crafting playful digital experiences",
  "hero.description":
    "I'm a frontend developer specialized in creating engaging, user-friendly websites and applications with modern technologies.",
  "hero.cta.viewWork": "View My Work",
  "hero.cta.getInTouch": "Get In Touch",

  // Projects Section
  "projects.title": "Featured Projects",
  "projects.subtitle":
    "Check out some of my latest work. Each project represents my passion for building engaging and user-friendly web experiences.",
  "projects.viewAll": "View All Projects",
  "projects.viewDetails": "View Details",
  "projects.liveDemo": "Live Demo",
  "projects.viewCode": "View Code",
  "projects.pageTitle": "My Projects",
  "projects.pageDescription":
    "Browse through my collection of projects. Each one represents a unique challenge and learning experience.",
  "projects.filterAll": "All",
  "projects.noProjectsFound": "No projects found with the selected filter.",

  // Project Detail
  "project.backToProjects": "Back to Projects",
  "project.loading": "Loading project...",
  "project.overview": "Project Overview",
  "project.features": "Key Features",
  "project.challenges": "Challenges",
  "project.solutions": "Solutions",
  "project.techStack": "Tech Stack",
  "project.learnings": "Key Learnings",

  // Skills Section
  "skills.title": "My Skills",
  "skills.subtitle":
    "Here are the technologies and tools I specialize in. I'm constantly learning and adding new skills to my repertoire.",
  "skills.journey.title": "My Learning Journey",
  "skills.journey.past.title": "Where I Started",
  "skills.journey.past.description":
    "My journey began with HTML, CSS, and vanilla JavaScript. I built simple static websites, gradually incorporating more complex features as my skills evolved. Learning the fundamentals thoroughly has provided me with a strong foundation for everything that followed.",
  "skills.journey.present.title": "Current Focus",
  "skills.journey.present.description":
    "Currently, I'm deeply focused on modern frontend frameworks like React and TypeScript for building interactive user interfaces. I'm also expanding my knowledge of state management solutions, animation libraries, and design systems to create seamless user experiences.",
  "skills.journey.future.title": "What's Next",
  "skills.journey.future.description":
    "I'm excited to dive deeper into emerging technologies like Next.js for server-side rendering and static site generation, Web3 technologies, and advanced animation techniques. I'm also interested in exploring more backend technologies to become a more well-rounded developer.",
  "skills.pageTitle": "My Skills & Expertise",
  "skills.pageDescription":
    "Here's a comprehensive look at my technical skills and the technologies I work with. I'm constantly learning and expanding my toolkit.",

  // Contact Section
  "contact.title": "Get In Touch",
  "contact.subtitle":
    "Have a project in mind or just want to say hello? Feel free to reach out and I'll get back to you soon!",
  "contact.form.name": "Your Name",
  "contact.form.email": "Your Email",
  "contact.form.message": "Your Message",
  "contact.form.submit": "Send Message",
  "contact.form.success": "Your message has been sent successfully!",
  "contact.form.error":
    "There was an error sending your message. Please try again.",
  "contact.form.sending": "Sending...",
  "contact.contactInfo": "Contact Information",
  "contact.email": "Email",
  "contact.phone": "Phone",
  "contact.location": "Location",
  "contact.messagePlaceholder": "Hello, I'd like to discuss a project...",
  "contact.pageTitle": "Get In Touch",
  "contact.pageDescription":
    "Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!",
  "contact.faq.title": "Frequently Asked Questions",
  "contact.faq.stack.question": "What technologies do you specialize in?",
  "contact.faq.stack.answer":
    "I specialize in building modern full-stack applications using TypeScript, React, Next.js, Node.js, Express, MongoDB, Redis, Docker, and more. I also use tools like Vitest for testing, Zustand for state management, and Tailwind CSS or Tamagui for design systems. My focus is on creating performant, scalable, and maintainable codebases.",

  "contact.faq.value.question":
    "What kind of value can you bring to a project?",
  "contact.faq.value.answer":
    "I bring end-to-end development expertise—from frontend interfaces to backend architecture to deployment. I emphasize developer experience, performance optimization, clean code practices, and scalable infrastructure. I’m well-versed in building production-grade apps that meet real-world business goals.",

  "contact.faq.workflow.question": "What’s your typical project workflow?",
  "contact.faq.workflow.answer":
    "I start by understanding the product scope and business goals. Then, I define architecture, plan components, and set up version-controlled CI-ready environments. Development is broken into agile, testable iterations with strong communication. I prioritize early testing, performance benchmarks, and long-term maintainability.",

  "contact.faq.timeline.question": "How long do your projects usually take?",
  "contact.faq.timeline.answer":
    "Timelines depend on the size and complexity of the project. For example, a landing page with animations can be delivered in under 2 weeks, while a full-stack SaaS MVP can take 1–2 months. I provide detailed milestones and realistic estimates before the project begins.",

  "contact.faq.aftercare.question":
    "Do you help after the project is deployed?",
  "contact.faq.aftercare.answer":
    "Yes. I offer support for debugging, performance monitoring, CI/CD improvements, and feature updates. I’m also happy to help transition the project to in-house teams or optimize for future scaling.",

  "contact.faq.next.question": "What are you currently learning or exploring?",
  "contact.faq.next.answer":
    "I’m currently deepening my knowledge of Next.js server components, edge rendering, tRPC, GraphQL, DevOps tooling, and cloud-native architectures. My goal is to be fully prepared to work on high-scale, enterprise-level applications.",

  // NotFound Page
  "notFound.title": "404",
  "notFound.subtitle": "Oops! Page Not Found",
  "notFound.description":
    "The page you're looking for seems to have wandered off into the digital void. Let's get you back on track!",
  "notFound.backToHome": "Back to Home",

  // Footer
  "footer.rights": "© {year} Rahul Roy. All rights reserved.",
  "footer.privacyPolicy": "Privacy Policy",
  "footer.termsOfService": "Terms of Service",
  "footer.connectWithMe": "Connect With Me",
  "footer.description":
    "Building playful and engaging web experiences with modern technologies.",

  // Mobile tabs
  "tabs.projects": "Projects",
  "tabs.skills": "Skills",

  // Theme
  "theme.light": "Light",
  "theme.dark": "Dark",
  "theme.system": "System",
  "theme.settings": "Theme settings",
};

// Japanese translations
const jaTranslations: Record<string, string> = {
  // Navigation
  "nav.home": "ホーム",
  "nav.projects": "プロジェクト",
  "nav.skills": "スキル",
  "nav.contact": "お問い合わせ",
  "nav.openMenu": "メニューを開く",
  "nav.closeMenu": "メニューを閉じる",

  // Hero Section
  "hero.greeting": "こんにちは！ラフルです",
  "hero.title": "遊び心のあるデジタル体験を創造",
  "hero.description":
    "最新のテクノロジーを使用して、魅力的でユーザーフレンドリーなウェブサイトやアプリケーションを作成することを専門とするフロントエンド開発者です。",
  "hero.cta.viewWork": "作品を見る",
  "hero.cta.getInTouch": "お問い合わせ",

  // Projects Section
  "projects.title": "注目のプロジェクト",
  "projects.subtitle":
    "最新の作品をご覧ください。各プロジェクトは、魅力的でユーザーフレンドリーなWeb体験を作り出す私の情熱を表現しています。",
  "projects.viewAll": "すべてのプロジェクトを見る",
  "projects.viewDetails": "詳細を見る",
  "projects.liveDemo": "デモを見る",
  "projects.viewCode": "コードを見る",
  "projects.pageTitle": "プロジェクト一覧",
  "projects.pageDescription":
    "私のプロジェクトコレクションをご覧ください。それぞれが独自の課題と学習経験を表しています。",
  "projects.filterAll": "すべて",
  "projects.noProjectsFound":
    "選択したフィルターに該当するプロジェクトが見つかりませんでした。",

  // Project Detail
  "project.backToProjects": "プロジェクト一覧に戻る",
  "project.loading": "読み込み中...",
  "project.overview": "プロジェクト概要",
  "project.features": "主な機能",
  "project.challenges": "課題",
  "project.solutions": "解決策",
  "project.techStack": "使用技術",
  "project.learnings": "学んだこと",

  // Skills Section
  "skills.title": "私のスキル",
  "skills.subtitle":
    "私が専門とする技術とツールです。常に学習し、新しいスキルを取り入れています。",
  "skills.journey.title": "私の学習の旅",
  "skills.journey.past.title": "始まり",
  "skills.journey.past.description":
    "私の旅はHTML、CSS、そして基本的なJavaScriptから始まりました。シンプルな静的ウェブサイトを作成し、スキルの向上に伴って徐々に複雑な機能を組み込んでいきました。基礎をしっかりと学ぶことで、その後の全ての学習の強固な土台となりました。",
  "skills.journey.present.title": "現在の焦点",
  "skills.journey.present.description":
    "現在は、ReactやTypeScriptなどのモダンなフロントエンドフレームワークを使用してインタラクティブなユーザーインターフェースの構築に重点を置いています。また、シームレスなユーザー体験を創造するため、状態管理ソリューション、アニメーションライブラリ、デザインシステムの知識を広げています。",
  "skills.journey.future.title": "次のステップ",
  "skills.journey.future.description":
    "Next.jsを使用したサーバーサイドレンダリングや静的サイト生成、Web3テクノロジー、高度なアニメーション技術などの新しい技術の探求を楽しみにしています。また、より幅広い開発者になるためにバックエンド技術の習得にも興味があります。",
  "skills.pageTitle": "スキルと専門分野",
  "skills.pageDescription":
    "私の技術スキルと使用している技術の詳細です。常に学習を続け、ツールキットを拡大しています。",

  // Contact Section
  "contact.title": "お問い合わせ",
  "contact.subtitle":
    "プロジェクトのアイデアがありますか？お気軽にご連絡ください。すぐに返信いたします！",
  "contact.form.name": "お名前",
  "contact.form.email": "メールアドレス",
  "contact.form.message": "メッセージ",
  "contact.form.submit": "送信",
  "contact.form.success": "メッセージが正常に送信されました！",
  "contact.form.error":
    "メッセージの送信中にエラーが発生しました。もう一度お試しください。",
  "contact.form.sending": "送信中...",
  "contact.contactInfo": "連絡先情報",
  "contact.email": "メール",
  "contact.phone": "電話番号",
  "contact.location": "所在地",
  "contact.messagePlaceholder":
    "こんにちは、プロジェクトについて相談したいのですが...",
  "contact.pageTitle": "お問い合わせ",
  "contact.pageDescription":
    "プロジェクトのアイデアがある、または協力の可能性について話し合いたいですか？ぜひご連絡ください！",
  "contact.faq.title": "よくある質問",
  "contact.faq.stack.question": "どのような技術スタックを使用していますか？",
  "contact.faq.stack.answer":
    "私はReact、Next.js、TypeScriptを中心に、Tailwind CSS、Framer Motion、Tamagui、Radix UIなどの最新UIライブラリを使用して、パフォーマンスとデザイン性の両立したフロントエンドを構築します。バックエンドにはNode.js、Express、MongoDB、Redis、WebSocketを使用し、リアルタイム通信とスケーラブルなアーキテクチャを実現しています。",

  "contact.faq.value.question": "どんな価値を提供できますか？",
  "contact.faq.value.answer":
    "単なるコーディングだけではなく、UXを意識した構成、アニメーション、アクセシビリティ、パフォーマンス最適化など、プロダクション品質にこだわった開発を行います。ビジネスの目的に合わせて設計された、ユーザー中心の高品質なWeb体験を構築します。",

  "contact.faq.workflow.question": "どのように作業を進めますか？",
  "contact.faq.workflow.answer":
    "要件の確認から始まり、設計、開発、テスト、デプロイメントまでの一貫したワークフローで対応します。FigmaやNotionでの共有、GitHubでの管理、定期的な報告など、透明性とスピード感のある進行を重視しています。",

  "contact.faq.timeline.question": "プロジェクトの期間はどのくらいですか？",
  "contact.faq.timeline.answer":
    "内容や規模により異なりますが、LPなどのシンプルな構成であれば1〜2週間、フルスタックアプリの場合は1〜2ヶ月を目安としています。初回ヒアリング時に、具体的なスケジュールをご提示します。",

  "contact.faq.aftercare.question": "納品後のサポートはありますか？",
  "contact.faq.aftercare.answer":
    "はい、納品後もご希望に応じてバグ修正、改善提案、定期的なアップデートなどの保守・運用サポートを提供可能です。プロダクトの安定性と継続的成長を支援します。",

  "contact.faq.next.question": "今後注力していく分野は何ですか？",
  "contact.faq.next.answer":
    "Next.jsのSSG、SSR、ISRやAPIルートに重点を置き、SEOとスケーラビリティに優れたWebアプリを構築できるよう取り組んでいます。また、tRPCやGraphQLによる型安全なAPI連携、VercelでのEdgeデプロイ、クラウドネイティブアーキテクチャ、React Server Components、Web3基礎など、フルスタックエンジニアとしての領域を広げています。",
  // NotFound Page
  "notFound.title": "404",
  "notFound.subtitle": "ページが見つかりません",
  "notFound.description":
    "お探しのページは見つかりませんでした。以下のリンクからホームページにお戻りください。",
  "notFound.backToHome": "ホームページへ",

  // Footer
  "footer.rights": "© {year} Rahul Roy. All rights reserved.",
  "footer.privacyPolicy": "プライバシーポリシー",
  "footer.termsOfService": "利用規約",
  "footer.connectWithMe": "私とつながる",
  "footer.description":
    "最新のテクノロジーで遊び心のある魅力的なWeb体験を創造しています。",

  // Theme
  "theme.light": "ライト",
  "theme.dark": "ダーク",
  "theme.system": "システム",
  "theme.settings": "テーマ設定",

  // Mobile tabs
  "tabs.projects": "プロジェクト",
  "tabs.skills": "スキル",
};

const translations: Record<Language, Record<string, string>> = {
  en: enTranslations,
  ja: jaTranslations,
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
