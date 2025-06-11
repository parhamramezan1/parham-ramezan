// components/BiographySection.tsx

import React from 'react';

const BiographySection = () => {
  return (
    <section className="bg-black text-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        بیوگرافی
      </h2>
      <div className="max-w-4xl mx-auto bg-zinc-900 p-6 rounded-2xl border border-zinc-700 shadow-lg">
        <p className="text-lg leading-8 mb-4">
          پرهام رمضان فعالیت حرفه‌ای خود را از سال ۱۳۸۸ آغاز کرده است. او در سن ۶ سالگی در حالی که در پارک مشغول بازی بود، به صورت اتفاقی وارد یک سکانس از یک گروه سینمایی شد و این نقطه‌ی شروع ورود او به دنیای هنر بود. تنها یک سال بعد، نخستین حضور جدی او در سینما رقم خورد.
        </p>
        <p className="text-lg leading-8 mb-4">
          وی در شبکه‌های یک، دو، سه، آموزش و ورزش فعالیت داشته و در پروژه‌های مختلفی چون فیلم‌های «رهایی»، «کارآموز»، «حسرت» و...، همچنین سریال‌هایی نظیر «عاشقانه»، «سه سوت»، «گروههان» و دیگر آثار تلویزیونی نقش‌آفرینی کرده است. از دیگر پروژه‌های شاخص او می‌توان به برنامه‌هایی مانند «دورهمی» و «تا نیایش» اشاره کرد.
        </p>
        <p className="text-lg leading-8 mb-4">
          پرهام رمضان در طول مسیر هنری خود افتخار همکاری با اساتید بزرگی همچون زنده‌یاد چنگیز جلیلوند، علی نصیریان، فتحعلی اویسی، سعید مقدم‌منش، سعید مظفری و غلامرضا صادقی را داشته است.
        </p>
        <p className="text-lg leading-8">
          او به دقت در جزئیات باور دارد و این ویژگی را عنصر جدایی‌ناپذیر از سبک کاری خود می‌داند.
        </p>
      </div>
    </section>
  );
};

export default BiographySection;
