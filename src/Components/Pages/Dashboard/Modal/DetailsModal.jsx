import React, { Fragment } from "react";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
export default function DetailsModal({ isOpen, closeModal, item }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                ></DialogTitle>
                <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <img
                    className="object-cover w-full h-64"
                    src={item?.image}
                    alt="Article"
                  />

                  <div className="p-6">
                    <div>
                      <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                        Product
                      </span>
                      <div className="flex items-center justify-between">
                        <span
                          className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                          tabindex="0"
                          role="link"
                        >
                          {item?.name}
                        </span>
                        <span>Unit Price : {item?.price}Tk</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {item?.description}
                      </p>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <a
                            href="#"
                            className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                            tabindex="0"
                            role="link"
                          >
                            Form
                          </a>
                        </div>
                        <div className="flex justify-center items-center gap-3">
                          {item?.form.map((f, index) => (
                            <span key={index}>{f}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
