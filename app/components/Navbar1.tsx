import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function Navbar1() {
  return (
    <div className="p-4">
      <Menubar>
        <MenubarMenu>
          <span className="text-3xl p-3">⌘</span>
          <MenubarTrigger>
            <span className="text-2xl">Todo</span>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              create<MenubarShortcut>/new</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              view<MenubarShortcut>/view</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
