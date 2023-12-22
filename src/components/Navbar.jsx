import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Navbar() {
  return (
    <NextNavbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Inclass</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">คอร์สเรียน</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            เข้าสู่ระบบ
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextNavbar>
  );
}
