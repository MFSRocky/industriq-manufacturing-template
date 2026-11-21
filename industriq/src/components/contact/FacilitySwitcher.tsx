"use client";

import { useState } from "react";
import { FACILITIES } from "@/data/site";
import { Tabs } from "@/components/ui/Tabs";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function FacilitySwitcher() {
  const [selectedId, setSelectedId] = useState(FACILITIES[0].id);
  const plant = FACILITIES.find((f) => f.id === selectedId) ?? FACILITIES[0];

  return (
    <div className="border border-obsidian bg-obsidian text-ivory p-6 space-y-5">
      <div className="space-y-1">
        <span className="font-mono-tech text-xs text-signal uppercase">
          DIRECT PLANT ROUTING
        </span>
        <h3 className="font-display text-xl font-semibold">Campus Dispatch Desk</h3>
      </div>

      <Tabs
        ariaLabel="Select INDUSTRIQ manufacturing facility"
        tabs={FACILITIES.map((f) => ({ id: f.id, label: f.city }))}
        activeId={selectedId}
        onChange={setSelectedId}
        theme="dark"
      />

      <div className="space-y-3 text-sm pt-2">
        <div className="font-mono-tech text-xs text-signal">{plant.code}</div>
        <p className="text-ivory/85 leading-relaxed">{plant.focus}</p>

        <div className="space-y-2 pt-3 border-t border-ivory/15 font-mono-tech text-xs text-steel-light">
          <p className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-signal shrink-0 mt-0.5" />
            <span className="text-ivory">{plant.address}</span>
          </p>
          <p className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-signal shrink-0" />
            <span className="text-ivory">{plant.phone}</span>
          </p>
          <p className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-signal shrink-0" />
            <span className="text-ivory">{plant.email}</span>
          </p>
          <p className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-signal shrink-0" />
            <span>{plant.shifts}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
