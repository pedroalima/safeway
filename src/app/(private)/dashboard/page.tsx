"use client";
import Image from "next/image";
import Link from "next/link";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { WiStars } from "react-icons/wi";
import { MdOutlineSpaceDashboard, MdAnalytics, MdBorderColor, MdBugReport, MdAssignmentInd, MdCheckCircleOutline  } from "react-icons/md";
import { Disclosure, RadioGroup } from "@headlessui/react";
import { FormEvent, useState } from "react";

const navLinks = [
  {
    title: "Dashboard",
    slug: "/dashboard",
    icon: <MdOutlineSpaceDashboard />
  },
  {
    title: "Projects",
    slug: "#",
    icon: <MdAnalytics  />
  },
  {
    title: "Tasks",
    slug: "#",
    icon: <MdBorderColor  />
  },
  {
    title: "Reporting",
    slug: "#",
    icon: <MdBugReport   />
  },
  {
    title: "Users",
    slug: "#",
    icon: <MdAssignmentInd  />
  }
];

const disclosureItens = [
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus corrupti maiores ipsa ex facilis, sint culpa non nihil."
  },
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus corrupti maiores ipsa ex facilis, sint culpa non nihil."
  },
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus corrupti maiores ipsa ex facilis, sint culpa non nihil."
  },
];

const cardItens = [
  {
    title: "Lorem, ipsum dolor",
    description: "Lorem ipsum, dolor sit amet consectetur..."
  },
  {
    title: "Lorem, ipsum dolor",
    description: "Lorem ipsum, dolor sit amet consectetur..."
  },
];

const plans = [
  {
    name: "Grátis",
  },
  {
    name: "Profissional",
  },
];

export default function Dashboard() {
  const router = useRouter();
  const [selected, setSelected] = useState(plans[0]);

  const handleLogout = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    cookie.remove("auth_user");
    router.push("/");
  };

  return (
    <section className="h-screen">
      <div className="px-20 py-14 h-full grid grid-cols-8 grid-rows-6 gap-6">
        {/* Dashboard 1 */}
        <div className="bg-white col-start-1 col-end-3 row-start-1 row-end-7 rounded-2xl p-6 flex flex-col gap-8">
          <div className="flex justify-start items-center gap-4">
            <Image 
              src="/logo.png" 
              width="45" 
              height="45" 
              alt="Logo" 
              className="rounded-full"
            />
            <span className="font-bold">SafeWay</span>
          </div>
          <div>
            <input type="search" name="search" id="search" placeholder="Search" className="bg-gray-100 rounded-lg w-full py-2 px-3" />
          </div>
          <div className="flex flex-col gap-3">
            {navLinks.map((link, i) => (
              <Link href={`${link.slug}`} key={i} className="text-gray-400 hover:text-slate-950 hover:font-bold flex items-center gap-2">{link.icon} {link.title}</Link>
            ))}
          </div>
          <div className="mt-auto flex justify-start items-center gap-3">
            <Image 
              src="/user.png"
              width="40"
              height="40"
              alt="Profile image"
            />
            <div className="flex flex-col">
              <span className="text-xs text-slate-950">Pedro Lima</span>
              <span className="text-xs text-gray-300">tsc.pedrolima@gmail.com</span>
            </div>
          </div>
          <form onSubmit={handleLogout}>
            <button 
              type="submit"
              className="bg-red-700 hover:bg-red-800 text-slate-100 rounded-full p-2 cursor-pointer w-full"
            >Sair</button>
          </form>
          
        </div>
        <div className="bg-white col-start-3 col-end-9 row-start-1 row-end-2 rounded-2xl p-6 flex justify-around items-center">
          {/* Dashboard 2 */}
          <div className="flex items-center gap-5">
            <div className="border rounded-md">
              <WiStars size="2rem" />
            </div>
            <span><strong>Lorem ipsum dolor sit amet</strong> consectetur adipisicing elit</span>
          </div>
          <button className="bg-slate-700 hover:bg-slate-800 text-white rounded-md px-4 py-1">Assinar</button>
        </div>
        <div className="bg-white col-start-3 col-end-6 row-start-2 row-end-7 rounded-2xl p-6 flex flex-col justify-around">
          {/* Dashboard 3 */}
          {disclosureItens.map((item, i) => (
            <div key={i} className="border-b">
              <Disclosure>
                <Disclosure.Button className="py-2 text-left font-bold">
                  {item.title}
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500">
                  {item.description}
                </Disclosure.Panel>
              </Disclosure>
            </div>
          ))}
        </div>
        <div className="bg-white col-start-6 col-end-9 row-start-2 row-end-5 rounded-2xl p-6 flex flex-col justify-around">
          {/* Dashboard 4 */}
          {cardItens.map((item, i) => (
            <div key={i} className="bg-gray-100 p-4 rounded-md">
              <a
                href="##"
                className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
              >
                <span className="flex items-center">
                  <span className="text-sm font-medium text-gray-900">
                    {item.title}
                  </span>
                </span>
                <span className="block text-sm text-gray-500">
                  {item.description}
                </span>
              </a>
            </div>
          ))}
        </div>
        <div className="bg-white col-start-6 col-end-9 row-start-5 row-end-7 rounded-2xl p-6">
          {/* Dashboard 5 */}
          <h3 className="font-bold mb-1">Planos</h3>
          <div className="w-full px-4">
            <div className="mx-auto w-full max-w-md">
              <RadioGroup value={selected} onChange={setSelected}>
                <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                <div className="space-y-2">
                  {plans.map((plan) => (
                    <RadioGroup.Option key={plan.name} value={plan}  className={ ({ active, checked }) => 
                      `${active ? "ring-2 ring-white/60 ring-offset-2 ring-offset-slate-900" : ""}
                      ${checked ? "bg-slate-800 text-white" : "bg-white"}
                      relative flex cursor-pointer rounded-lg px-5 py-2 shadow-md focus:outline-none`
                    }>
                      {({ checked }) => (
                        <>
                          <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                              <div className="text-sm">
                                <RadioGroup.Label as="p" className={`font-medium  ${ checked ? "text-white" : "text-gray-900" }`}>
                                  {plan.name}
                                </RadioGroup.Label>
                              </div>
                            </div>
                            {checked && (
                              <div className="shrink-0 text-white">
                                <MdCheckCircleOutline className="h-6 w-6" />
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
        
    </section>
  );
}