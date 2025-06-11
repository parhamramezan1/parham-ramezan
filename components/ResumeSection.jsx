import React from "react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-12 px-4 md:px-8 lg:px-16 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-orange-500 inline-block">
          رزومه
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* سمت راست: اطلاعات تماس و تحصیلات */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-orange-400">اطلاعات تماس</h3>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>📞 09124593289</li>
                <li>✉️ parhamramezan91@gmail.com</li>
                <li>📍 تهران، ایران</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-orange-400">تحصیلات</h3>
              <ul className="list-disc text-sm pl-5 text-gray-300 space-y-1">
                <li>نویسندگی هنری، آموزشگاه هنر و اندیشه (صدا و سیما)</li>
                <li>حقوق، دانشگاه تهران</li>
                <li>دوره بلندمدت دوبله، چنگیز جلیلوند</li>
                <li>دوره نویسندگی خلاق، وزارت ارشاد</li>
              </ul>
            </div>
          </div>

          {/* سمت چپ: سوابق کاری */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-400">سوابق کاری</h3>
            <p className="text-sm text-gray-400 mb-4">مدیر پروژه‌های تولیدی | ۲۰۰۸ تا ۲۰۱۵</p>
            <ul className="list-decimal text-sm pl-5 text-gray-300 space-y-1 leading-relaxed">
              <li>نویسندگی و کارگردانی فیلم سینمایی «حسرت»</li>
              <li>فیلم سینمایی «توهم»، «نازنین»، «فرار»</li>
              <li>کارگردانی مستند و تیزرهای تبلیغاتی</li>
              <li>همکاری با شبکه‌های صدا و سیما</li>
              <li>دستیار کارگردان برنامه‌های تلویزیونی</li>
              <li>تدوین و صداگذاری آثار هنری</li>
              <li>دوبله با همکاری مرحوم چنگیز جلیلوند</li>
              <li>کارگردانی تئاترهای صحنه‌ای و مستندهای اجتماعی</li>
              <li>مدیریت پروژه‌های تولید فیلم کوتاه و هنری</li>
              <li>و بیش از ۲۰ پروژه‌ی دیگر در حوزه رسانه</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
