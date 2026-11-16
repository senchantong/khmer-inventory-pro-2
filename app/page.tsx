"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  Truck,
  Wallet,
  Bell,
  Search,
  Menu,
  Globe,
  ArrowUpRight,
  TrendingUp,
  Boxes,
  Receipt,
} from "lucide-react";

export default function Dashboard() {
  const [language, setLanguage] = useState<"km" | "en">("km");
  const [active, setActive] = useState("dashboard");

  const km = language === "km";

  const menu = [
    { id: "dashboard", icon: LayoutDashboard, km: "ផ្ទាំងគ្រប់គ្រង", en: "Dashboard" },
    { id: "products", icon: Package, km: "ផលិតផល", en: "Products" },
    { id: "sales", icon: ShoppingCart, km: "ការលក់", en: "Sales" },
    { id: "customers", icon: Users, km: "អតិថិជន", en: "Customers" },
    { id: "suppliers", icon: Truck, km: "អ្នកផ្គត់ផ្គង់", en: "Suppliers" },
    { id: "stock", icon: Boxes, km: "គ្រប់គ្រងស្តុក", en: "Inventory" },
    { id: "expenses", icon: Wallet, km: "ចំណាយ", en: "Expenses" },
    { id: "reports", icon: BarChart3, km: "របាយការណ៍", en: "Reports" },
    { id: "settings", icon: Settings, km: "ការកំណត់", en: "Settings" },
  ];

  const stats = [
    { label: km ? "ផលិតផលសរុប" : "Total Products", value: "0", icon: Package, color: "blue" },
    { label: km ? "ការលក់ថ្ងៃនេះ" : "Today's Sales", value: "$0.00", icon: TrendingUp, color: "green" },
    { label: km ? "អតិថិជនសរុប" : "Total Customers", value: "0", icon: Users, color: "purple" },
    { label: km ? "វិក្កយបត្រសរុប" : "Total Invoices", value: "0", icon: Receipt, color: "orange" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 md:flex">

      <aside className="hidden md:flex w-64 bg-slate-950 text-white flex-col min-h-screen p-5">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-blue-600 rounded-xl p-3">
            <Boxes size={25} />
          </div>
          <div>
            <h1 className="font-bold text-lg">Khmer Inventory</h1>
            <p className="text-xs text-slate-400">PRO VERSION 2.0</p>
          </div>
        </div>

        <p className="text-xs text-slate-500 mb-4">
          {km ? "ម៉ឺនុយមេ" : "MAIN MENU"}
        </p>

        <nav className="space-y-2">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl text-sm transition ${
                active === item.id
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon size={19} />
              {km ? item.km : item.en}
            </button>
          ))}
        </nav>

        <div className="mt-auto bg-slate-900 p-4 rounded-2xl">
          <p className="text-sm font-semibold">Khmer Inventory Pro</p>
          <p className="text-xs text-slate-400 mt-1">Professional Edition</p>
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        <header className="bg-white border-b border-slate-200 px-5 md:px-8 py-4 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-xl">
              {km ? "ផ្ទាំងគ្រប់គ្រង" : "Dashboard"}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {km ? "សូមស្វាគមន៍មកកាន់ប្រព័ន្ធរបស់អ្នក" : "Welcome to your management system"}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(km ? "en" : "km")}
              className="flex items-center gap-2 border rounded-xl px-3 py-2 text-sm"
            >
              <Globe size={17} />
              {km ? "ខ្មែរ" : "English"}
            </button>

            <button className="relative p-2 rounded-xl bg-slate-100">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </div>
        </header>

        <div className="p-5 md:p-8">
          <div className="bg-gradient-to-r from-blue-700 to-indigo-600 rounded-3xl p-7 md:p-9 text-white mb-8">
            <p className="text-blue-100 text-sm">
              {km ? "ប្រព័ន្ធគ្រប់គ្រងអាជីវកម្មរបស់អ្នក" : "YOUR BUSINESS MANAGEMENT SYSTEM"}
            </p>
            <h1 className="text-2xl md:text-3xl font-bold mt-3">
              {km ? "សូមស្វាគមន៍! 👋" : "Welcome Back! 👋"}
            </h1>
            <p className="text-blue-100 mt-3 text-sm">
              {km
                ? "គ្រប់គ្រងការលក់ និងស្តុករបស់អ្នកនៅកន្លែងតែមួយ។"
                : "Manage your sales and inventory in one place."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
            {stats.map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center">
                  <div className="bg-blue-50 text-blue-600 p-3 rounded-xl">
                    <item.icon size={22} />
                  </div>
                  <ArrowUpRight className="text-slate-300" />
                </div>
                <p className="text-sm text-slate-500 mt-5">{item.label}</p>
                <h3 className="text-2xl font-bold mt-2">{item.value}</h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold">
                  {km ? "សកម្មភាពថ្មីៗ" : "Recent Activity"}
                </h3>
                <Search size={19} className="text-slate-400" />
              </div>

              <div className="text-center py-12 text-slate-400">
                <BarChart3 size={45} className="mx-auto mb-3 opacity-40" />
                <p className="text-sm">
                  {km ? "មិនទាន់មានទិន្នន័យនៅឡើយ" : "No activity data yet"}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-bold mb-5">
                {km ? "ផ្លូវកាត់" : "Quick Actions"}
              </h3>

              <div className="space-y-3">
                {[
                  { icon: Package, label: km ? "បន្ថែមផលិតផល" : "Add Product" },
                  { icon: ShoppingCart, label: km ? "បង្កើតការលក់" : "New Sale" },
                  { icon: Users, label: km ? "បន្ថែមអតិថិជន" : "Add Customer" },
                ].map((action) => (
                  <button
                    key={action.label}
                    className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 text-sm transition"
                  >
                    <action.icon size={19} className="text-blue-600" />
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <footer className="text-center text-xs text-slate-400 mt-10">
            © 2026 Khmer Inventory Pro 2.0 · Professional Edition
          </footer>
        </div>
      </main>
    </div>
  );
}
