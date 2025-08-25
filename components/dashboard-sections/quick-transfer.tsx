"use client";

import { Send, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Card } from "../ui/card";

export const contactsData = [
  {
    id: 1,
    name: "Livia Bator",
    role: "CEO",
    src: "/images/transfer/ceo.png",
  },
  {
    id: 2,
    name: "Randy Press",
    role: "Director",
    src: "/images/transfer/director.png",
  },
  {
    id: 3,
    name: "Workman",
    role: "Designer",
    src: "/images/transfer/work-man.png",
  },
];

export function QuickTransfers() {
  return (
    <div>
      <h2 className="text-[#343C6A] text-lg md:text-xl font-semibold mb-4 md:mb-6">
        Quick Transfer{" "}
      </h2>
      <Card className="bg-white rounded-2xl p-4 md:p-8 shadow-sm border border-gray-200 w-full">
        <div className="flex space-y-6 md:space-y-0 flex-row justify-between mb-8 md:mb-16">
          <div className="flex items-center space-x-3 md:space-x-8 overflow-x-auto pb-2 md:pb-0">
            {contactsData.map((contact) => (
              <div
                key={contact.id}
                className="flex flex-col items-center space-y-2 md:space-y-3 shrink-0"
              >
                <Image
                  src={contact.src}
                  alt={contact.name}
                  width={80}
                  height={80}
                  className="w-12 h-12 md:w-20 md:h-20 rounded-full object-cover"
                />

                <div className="text-center">
                  <div className="font-bold text-gray-900 text-sm md:text-lg">
                    {contact.name}
                  </div>
                  <div
                    className={`text-[#718EBF] text-xs md:text-base ${
                      contact.role === "CEO" ? "font-bold" : "font-normal"
                    }`}
                  >
                    {contact.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrow */}
          <button className="self-center md:self-auto p-2 md:p-3 bg-white shadow-md hover:bg-gray-50 rounded-full transition-colors">
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-400" />
          </button>
        </div>

        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
          <div className="text-[#718EBF] text-base md:text-lg font-medium">
            Write Amount
          </div>
          <div className="bg-[#EDF1F7] flex rounded-full">
            <input
              type="text"
              defaultValue="525.50"
              className="bg-transparent border-none outline-none font-light text-[#718EBF] w-full p-2 md:p-2 ml-2 md:ml-4 text-sm md:text-base"
            />

            <button className="bg-[#1814F3] hover:bg-secondary text-white font-semibold py-2 px-4 md:py-4 md:px-8 rounded-full flex items-center space-x-2 md:space-x-3 transition-colors shadow-lg ml-2 md:ml-6">
              <span className="text-sm md:text-lg">Send</span>
              <Send className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
