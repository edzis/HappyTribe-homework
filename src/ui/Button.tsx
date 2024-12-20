import { Slot } from "@radix-ui/react-slot";
import cn from "src/utils/cn";

export default function Button({
  asChild,
  variant = "default",
  className,
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "icon";
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "flex items-center justify-center hover:bg-[#f4f5f6] outline-none focus:ring-1 focus:ring-primary data-[active]:bg-[#f4f5f6] text-[#838691] data-[active]:text-primary rounded-md text-sm px-1 py-0.5",
        {
          "border-[1px] border-[#EDEDF0] w-8 h-8": variant === "icon",
        },
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
