'use client'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="font-emberly">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4 mt-4">
          <Button variant="ghost" className="w-full justify-start font-emberly">
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start font-emberly">
            Patients
          </Button>
          <Button variant="ghost" className="w-full justify-start font-emberly">
            Reports
          </Button>
          <Button variant="ghost" className="w-full justify-start font-emberly">
            Settings
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

