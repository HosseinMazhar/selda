import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="w-full flex flex-col justify-start items-end pt-[40px] bg-[#F0F2F3] dark:bg-neutral-800 font-kalameh lg:px-[95px] px-[16px] gap-[30px] lg:gap-[40px] pb-[100px] dark:text-white lg:pt-[120px]">
      <h1 className="text-2xl lg:text-3xl font-bold mb-[36px] lg:mb-[64px]">
        جدیدترین خبرهای ما
      </h1>
      <NewsCard
        date="02/04"
        title="تحلیل بنیادی ارز های دیجیتال"
        description="در دنیای پرتلاطم ارزهای دیجیتال، سرمایه‌گذاران و معامله‌گران همواره
            در جستجوی راه‌هایی برای پیش‌بینی و تصمیم‌گیری آگاهانه هستند. در این
            میان، تحلیل بنیادی به عنوان ابزاری قدرتمند، نقشی کلیدی در رمزگشایی
            از ارزش ذاتی این رمزها ایفا می‌کند"
        imageURL="/news/news.png"
        imageTitle="تحلیل بنیادی ارزهای دیجیتال"
      />
      <NewsCard
        date="02/04"
        title="تحلیل بنیادی ارز های دیجیتال"
        description="در دنیای پرتلاطم ارزهای دیجیتال، سرمایه‌گذاران و معامله‌گران همواره
            در جستجوی راه‌هایی برای پیش‌بینی و تصمیم‌گیری آگاهانه هستند. در این
            میان، تحلیل بنیادی به عنوان ابزاری قدرتمند، نقشی کلیدی در رمزگشایی
            از ارزش ذاتی این رمزها ایفا می‌کند"
        imageURL="/news/news.png"
        imageTitle="تحلیل بنیادی ارزهای دیجیتال"
      />
    </div>
  );
};

export default News;
