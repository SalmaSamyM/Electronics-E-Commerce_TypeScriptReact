import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  // Determine the initial state from props
  const initialChecked = props.defaultChecked || props.checked || false;
  const [localChecked, setLocalChecked] = React.useState(initialChecked);
  
  // Update local state when controlled props change
  React.useEffect(() => {
    if (props.checked !== undefined) {
      setLocalChecked(props.checked);
    }
  }, [props.checked]);

  const handleChange = (checked: boolean | "indeterminate") => {
    // Update local state for uncontrolled components
    if (props.checked === undefined) {
      setLocalChecked(checked === "indeterminate" ? false : checked);
    }
    
    // Call the original onCheckedChange if provided
    if (props.onCheckedChange) {
      props.onCheckedChange(checked);
    }
  };

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground cursor-pointer",
        className
      )}
      checked={props.checked !== undefined ? props.checked : localChecked}
      onCheckedChange={handleChange}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
