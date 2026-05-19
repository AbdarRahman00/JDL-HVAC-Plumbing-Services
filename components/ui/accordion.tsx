"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  allowMultiple?: boolean;
}

interface AccordionItemProps {
  id: string | number;
  title: string;
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function Accordion({ children, className, allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = React.useState<Set<string | number>>(new Set());

  const handleToggle = (id: string | number) => {
    const next = new Set(openIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      if (!allowMultiple) {
        next.clear();
      }
      next.add(id);
    }
    setOpenIds(next);
  };

  return (
    <div className={cn("space-y-3", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<AccordionItemProps>(child)) {
          const id = child.props.id;
          return React.cloneElement(child, {
            isOpen: openIds.has(id),
            onToggle: () => handleToggle(id),
          });
        }
        return child;
      })}
    </div>
  );
}

export function AccordionItem({ title, children, className, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className={cn("border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:border-secondary-light/40", className)}>
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between w-full p-4 md:p-5 text-left font-semibold text-primary transition-colors duration-200 hover:bg-slate-50/50"
      >
        <span className="text-base md:text-lg pr-4">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="text-slate-400 flex-shrink-0"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="p-4 md:p-5 pt-0 border-t border-slate-100 text-mutedSlate text-sm md:text-base leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
