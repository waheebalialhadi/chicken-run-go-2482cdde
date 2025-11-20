import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="container mx-auto px-4 py-8 space-y-8 max-w-2xl">
      <div>
        <h2 className="text-xl font-medium text-foreground mb-4">لمحة عن هذا التطبيق</h2>
        <p className="text-foreground leading-relaxed text-sm">
          اختبار NV: اختبر معرفتك بجميع أنواع الرياضيات والإملاء والتاريخ ومواضيع عامة! 
          
          50+ مَيَلاً تُعطى بالرياضيات وللإملاء وللتاريخ وللمعلومات العامة لتختبر معرفتك وتكتسب المزيد من المعرفة بطريقة ممتعة وتفاعلية.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-foreground mb-3">المميزات الرئيسية</h3>
          <ul className="space-y-2 text-foreground text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>أسئلة متنوعة في مختلف المجالات</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>واجهة سهلة الاستخدام</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>تحديات يومية ومكافآت</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>تصميم جذاب ومريح للعين</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>مناسب لجميع الأعمار</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium text-foreground mb-3">معلومات التطبيق</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">تم التحديث في:</span>
              <span>١٥ يناير ٢٠٢٥</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">الحجم:</span>
              <span>١٢٥ ميغابايت</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">عمليات التثبيت:</span>
              <span>+10,000,000</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">الإصدار الحالي:</span>
              <span>2.5.1</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">يتطلب Android:</span>
              <span>5.0 وأحدث</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">مستوى المحتوى:</span>
              <span>مستوى 3 أعوام فما فوق</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">منتجات داخل التطبيق:</span>
              <span>من 0.99$ إلى 99.99$ لكل عنصر</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {["كاجوال", "ألعاب أركيد", "حركة", "لاعب واحد", "بلا إنترنت", "للعائلة"].map((tag) => (
          <Button
            key={tag}
            variant="outline"
            size="sm"
            className="rounded-full text-xs"
          >
            {tag}
          </Button>
        ))}
      </div>

      <Button variant="ghost" className="w-full text-primary">
        <ChevronDown className="h-4 w-4 ml-2" />
        عرض المزيد
      </Button>
    </section>
  );
};

export default AboutSection;
