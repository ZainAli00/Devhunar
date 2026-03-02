import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  subtitle?: string;
  content: ReactNode;
  icon?: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 overflow-hidden bg-white/80 backdrop-blur-sm">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50/80 transition-colors group"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                {item.icon && (
                  <span className="text-2xl">{item.icon}</span>
                )}
                <div>
                  <p className="font-display font-bold text-dark text-lg leading-tight">
                    {item.title}
                  </p>
                  {item.subtitle && (
                    <p className="text-sm text-gray-500 mt-0.5">{item.subtitle}</p>
                  )}
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-6 pt-1 text-gray-600 leading-relaxed">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
