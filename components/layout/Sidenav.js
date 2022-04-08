import Image from "next/image";
import { useRouter } from "next/router";
import {
  RiHome6Line,
  RiNotification2Line,
  RiBookmark2Line,
  RiAddCircleLine,
} from "react-icons/ri";

const user = {
  name: "Emily Selman",
  email: "emily.selman@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "/home", icon: RiHome6Line },
  {
    name: "Notifications",
    href: "/32sda/notifications",
    icon: RiNotification2Line,
  },
  { name: "Bookmarks", href: "/esad3/bookmarks", icon: RiBookmark2Line },
  { name: "New Post", href: "/add", icon: RiAddCircleLine },
];

export default function Sidenav() {
  const router = useRouter();

  const { pathname, asPath } = router;

  return (
    <header className="hidden border-r md:w-auto md:flex md:flex-shrink-0 bg-default-white border-brand-border">
      <div className="flex flex-col w-20">
        <div className="flex flex-col flex-1 min-h-0 overflow-y-auto bg-black">
          <div className="flex-1">
            <div className="flex items-center justify-center pt-8 pb-2">
              <Image
                height={22}
                width={38}
                alt="Image"
                src="https://seeklogo.com/images/M/medium-logo-F0ACFCCD58-seeklogo.com.png"
              />
            </div>
            <nav
              aria-label="Sidebar"
              className="flex flex-col items-center mt-20 space-y-4"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center p-3 text-white rounded-full hover:bg-brand-gray-active cursor-pointer ${
                    (item.href.includes(pathname) || item.href === asPath) &&
                    "bg-brand-gray-active"
                  } ${
                    item.name === "New Post" &&
                    "bg-brand-pastelYellow shadow-lg hover:shadow-sm hover:bg-brand-gray-active"
                  }`}
                >
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                  <span className="sr-only">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-shrink-0 pb-5">
            <a href="#" className="flex-shrink-0 w-full">
              <img
                className="block w-10 h-10 mx-auto rounded-full"
                src={user.imageUrl}
                alt=""
              />
              <div className="sr-only">
                <p>{user.name}</p>
                <p>Account settings</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
