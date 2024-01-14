import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import logo from '@assets/logo-white.png'
import darkLogo from '@assets/logo-dark.png'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between bg-primary p-6 md:px-8"
        aria-label="Global"
      >
        <div className="flex md:flex-1">
          <span className="sr-only">Proroi agência de marketing</span>
          <img
            className="h-10 w-auto"
            src={logo}
            alt="Logo Proroi agência de marketing"
          />
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden h-10 items-center md:flex md:gap-x-12">
          <a
            className="cursor-pointer text-sm font-semibold leading-6 text-white hover:underline hover:underline-offset-4"
            href="#abt-us"
          >
            Sobre nós
          </a>
          <a
            className="cursor-pointer text-sm font-semibold leading-6 text-white hover:underline hover:underline-offset-4"
            href="#feedbacks"
          >
            Feedbacks
          </a>
          <a
            className="cursor-pointer text-sm font-semibold leading-6 text-white hover:underline hover:underline-offset-4"
            href="#srvcs"
          >
            Serviços
          </a>
        </div>
        <p className="hidden md:flex md:flex-1"></p>
      </nav>
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Proroi agência de marketing</span>
              <img
                className="h-8 w-auto"
                src={darkLogo}
                alt="Logo Proroi agência de marketing"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  href="#abt-us"
                >
                  Sobre nós
                </a>
                <a
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  href="#feedbacks"
                >
                  Feedbacks
                </a>
                <a
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  href="#srvcs"
                >
                  Serviços
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
