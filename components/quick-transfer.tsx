"use client";

import { Send, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Card } from "./ui/card";

export const contactsData = [
  {
    id: 1,
    name: "Livia Bator",
    role: "CEO",
    src: "/ceo.png",
  },
  {
    id: 2,
    name: "Randy Press",
    role: "Director",
    src: "/director.png",
  },
  {
    id: 3,
    name: "Workman",
    role: "Designer",
    src: "/person.png",
  },
];

export function QuickTransfers() {
  return (
    <div>
      <h2 className="text-[#343c6a] text-xl font-semibold mb-6">
        Quick Transfer{" "}
      </h2>
      <Card className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 w-full max-w-2xl">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-8">
            {contactsData.map((contact) => (
              <div
                key={contact.id}
                className="flex flex-col items-center space-y-3"
              >
                <Image
                  src={contact.src}
                  alt={contact.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover"
                />

                <div className="text-center">
                  <div className="font-bold text-gray-900 text-lg">
                    {contact.name}
                  </div>
                  <div className="text-blue-400 text-base font-medium">
                    {contact.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrow */}
          <button className="p-3 hover:bg-gray-50 rounded-full transition-colors">
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="p-4 flex items-center justify-between">
          <div className="flex justify-between items-center gap-8">
            <div className="text-gray-400 text-lg font-medium whitespace-nowrap">
              Write Amount
            </div>
            <div className="bg-gray-50 flex rounded-full">
              <input
                type="text"
                defaultValue="525.50"
                className="bg-transparent border-none outline-none text-3xl font-light text-gray-600 w-full p-2"
              />

              <button className="bg-secondary hover:bg-primary text-white font-semibold py-4 px-8 rounded-full flex items-center space-x-3 transition-colors shadow-lg ml-6">
                <span className="text-lg">Send</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
