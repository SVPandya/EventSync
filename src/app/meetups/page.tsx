// TODO: Create a page for meetups
"use client";
import Sidebar from "@/app/components/sidebar";
import {defaultUser} from "@/types";

export default function Meetups() {
  return (
      <div className="flex flex-row bg-neutral-100 dark:bg-black h-screen w-screen">
          <Sidebar user={defaultUser} active="meetups"/>
      </div>
  )
}