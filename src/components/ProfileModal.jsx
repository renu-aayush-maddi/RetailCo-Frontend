// import React, { useEffect, useMemo, useState } from "react";
// import { api } from "../utils/api";
// import useAuth from "../store/useAuth";

// export default function ProfileModal({ open, onClose }) {
//   const { token } = useAuth();

//   const [loading, setLoading] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [deleting, setDeleting] = useState(false);

//   const [profile, setProfile] = useState({
//     sizes: { shirt: "", pant: "", shoe: "", tshirt: "", kurta: "" },
//     fit: "",
//     style: [],
//     colors: [],
//     price_min: "",
//     price_max: "",
//     preferred_store: "",
//     city: "",
//     brand_prefs: [],
//     notify_channel: "",
//     measurements: { chest: "", waist: "", hip: "" },
//     updated_at: ""
//   });

//   // String ↔ Array helpers for multi-value inputs
//   const styleCSV  = useMemo(() => (profile.style || []).join(", "), [profile.style]);
//   const colorsCSV = useMemo(() => (profile.colors || []).join(", "), [profile.colors]);
//   const brandsCSV = useMemo(() => (profile.brand_prefs || []).join(", "), [profile.brand_prefs]);

//   useEffect(() => {
//     if (!open || !token) return;
//     (async () => {
//       setLoading(true);
//       try {
//         const { data } = await api.get("/me/manual");
//         setProfile((prev) => ({
//           ...prev,
//           ...(data || {}),
//           sizes: { shirt:"", pant:"", shoe:"", tshirt:"", kurta:"", ...(data?.sizes || {}) },
//           measurements: { chest:"", waist:"", hip:"", ...(data?.measurements || {}) }
//         }));
//       } catch (e) {
//         console.error("Load profile failed", e);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [open, token]);

//   const handleSave = async () => {
//     setSaving(true);
//     try {
//       // Build payload with only non-empty fields
//       const payload = {};
//       const nonEmptyArr = (arr) => Array.isArray(arr) ? arr.map(s => s.trim()).filter(Boolean) : undefined;

//       if (profile.sizes) {
//         const s = Object.fromEntries(Object.entries(profile.sizes).filter(([,v]) => String(v || "").trim() !== ""));
//         if (Object.keys(s).length) payload.sizes = s;
//       }
//       if (profile.measurements) {
//         const m = Object.fromEntries(Object.entries(profile.measurements).filter(([,v]) => String(v || "").trim() !== ""));
//         if (Object.keys(m).length) payload.measurements = m;
//       }
//       if (profile.fit?.trim()) payload.fit = profile.fit.trim();
//       const sArr = nonEmptyArr(profile.style);        if (sArr?.length) payload.style = sArr;
//       const cArr = nonEmptyArr(profile.colors);       if (cArr?.length) payload.colors = cArr;
//       const bArr = nonEmptyArr(profile.brand_prefs);  if (bArr?.length) payload.brand_prefs = bArr;

//       const pm = Number(profile.price_min);
//       const px = Number(profile.price_max);
//       if (!Number.isNaN(pm)) payload.price_min = pm;
//       if (!Number.isNaN(px)) payload.price_max = px;

//       if (profile.preferred_store?.trim()) payload.preferred_store = profile.preferred_store.trim();
//       if (profile.city?.trim()) payload.city = profile.city.trim();
//       if (profile.notify_channel?.trim()) payload.notify_channel = profile.notify_channel.trim();

//       const { data } = await api.put("/me/manual", payload);
//       setProfile((p) => ({ ...p, ...data }));
//     } catch (e) {
//       console.error("Save profile failed", e);
//       alert("Could not save profile.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const [deleteKeys, setDeleteKeys] = useState([]);
//   const toggleKey = (k) => {
//     setDeleteKeys((prev) => prev.includes(k) ? prev.filter(x => x !== k) : [...prev, k]);
//   };
//   const handleDelete = async () => {
//     if (!deleteKeys.length) return;
//     if (!window.confirm(`Delete: ${deleteKeys.join(", ")} ?`)) return;
//     setDeleting(true);
//     try {
//       const { data } = await api.delete("/me/manual", { data: { keys: deleteKeys } });
//       setProfile((p) => ({
//         ...p,
//         ...data,
//         sizes: { shirt:"", pant:"", shoe:"", tshirt:"", kurta:"", ...(data?.sizes || {}) },
//         measurements: { chest:"", waist:"", hip:"", ...(data?.measurements || {}) }
//       }));
//       setDeleteKeys([]);
//     } catch (e) {
//       console.error("Delete keys failed", e);
//       alert("Could not delete selected keys.");
//     } finally {
//       setDeleting(false);
//     }
//   };

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50">
//       {/* backdrop */}
//       <div className="absolute inset-0 bg-black/40" onClick={onClose} />
//       {/* modal */}
//       <div className="absolute inset-x-0 top-10 mx-auto w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
//         <div className="flex items-center justify-between px-6 py-4 border-b">
//           <h3 className="text-lg font-semibold">Your Profile</h3>
//           <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>✕</button>
//         </div>

//         <div className="max-h-[70vh] overflow-y-auto px-6 py-4">
//           {loading ? (
//             <div className="py-10 text-center text-gray-500">Loading…</div>
//           ) : (
//             <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
//               {/* Sizes */}
//               <section>
//                 <h4 className="font-semibold mb-2">Sizes</h4>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//                   {["shirt","pant","shoe","tshirt","kurta"].map((k) => (
//                     <label key={k} className="text-sm">
//                       <span className="block text-gray-600 mb-1 capitalize">{k}</span>
//                       <input
//                         className="w-full border rounded-lg px-3 py-2"
//                         value={profile.sizes?.[k] || ""}
//                         onChange={(e) => setProfile(p => ({ ...p, sizes: { ...(p.sizes||{}), [k]: e.target.value } }))}
//                         placeholder={k === "shoe" ? "9" : (k === "pant" ? "32" : "M")}
//                       />
//                     </label>
//                   ))}
//                 </div>
//               </section>

//               {/* Fit + store + city */}
//               <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
//                 <label className="text-sm">
//                   <span className="block text-gray-600 mb-1">Fit</span>
//                   <select
//                     className="w-full border rounded-lg px-3 py-2"
//                     value={profile.fit || ""}
//                     onChange={(e) => setProfile(p => ({ ...p, fit: e.target.value }))}
//                   >
//                     <option value="">Select</option>
//                     <option value="slim">Slim</option>
//                     <option value="regular">Regular</option>
//                     <option value="relaxed">Relaxed</option>
//                   </select>
//                 </label>
//                 <label className="text-sm">
//                   <span className="block text-gray-600 mb-1">Preferred Store</span>
//                   <input
//                     className="w-full border rounded-lg px-3 py-2"
//                     value={profile.preferred_store || ""}
//                     onChange={(e) => setProfile(p => ({ ...p, preferred_store: e.target.value }))}
//                     placeholder="S1"
//                   />
//                 </label>
//                 <label className="text-sm">
//                   <span className="block text-gray-600 mb-1">City</span>
//                   <input
//                     className="w-full border rounded-lg px-3 py-2"
//                     value={profile.city || ""}
//                     onChange={(e) => setProfile(p => ({ ...p, city: e.target.value }))}
//                     placeholder="Bengaluru"
//                   />
//                 </label>
//               </section>

//               {/* Styles / Colors / Brands (CSV) */}
//               <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
//                 <label className="text-sm">
//                   <span className="block text-gray-600 mb-1">Style (comma separated)</span>
//                   <input
//                     className="w-full border rounded-lg px-3 py-2"
//                     value={styleCSV}
//                     onChange={(e) =>
//                       setProfile(p => ({ ...p, style: e.target.value.split(",").map(s => s.trim()).filter(Boolean) }))
//                     }
//                     placeholder="formal, minimal"
//                   />
//                 </label>
//                 <label className="text-sm">
//                   <span className="block text-gray-600 mb-1">Colors (comma separated)</span>
//                   <input
//                     className="w-full border rounded-lg px-3 py-2"
//                     value={colorsCSV}
//                     onChange={(e) =>
//                       setProfile(p => ({ ...p, colors: e.target.value.split(",").map(s => s.trim()).filter(Boolean) }))
//                     }
//                     placeholder="white, navy"
//                   />
//                 </label>
//                 <label className="text-sm">
//                   <span className="block text-gray-600 mb-1">Brands (comma separated)</span>
//                   <input
//                     className="w-full border rounded-lg px-3 py-2"
//                     value={brandsCSV}
//                     onChange={(e) =>
//                       setProfile(p => ({ ...p, brand_prefs: e.target.value.split(",").map(s => s.trim()).filter(Boolean) }))
//                     }
//                     placeholder="Allen Solly, Louis Philippe"
//                   />
//                 </label>
//               </section>

//               {/* Budget + Notify */}
//               <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
//                 <label className="text-sm">
//                   <span className="block text-gray-600 mb-1">Price Min</span>
//                   <input
//                     type="number"
//                     className="w-full border rounded-lg px-3 py-2"
//                     value={profile.price_min ?? ""}
//                     onChange={(e) => setProfile(p => ({ ...p, price_min: e.target.value }))}
//                     placeholder="0"
//                     min="0"
//                   />
//                 </label>
//                 <label className="text-sm">
//                   <span className="block text-gray-600 mb-1">Price Max</span>
//                   <input
//                     type="number"
//                     className="w-full border rounded-lg px-3 py-2"
//                     value={profile.price_max ?? ""}
//                     onChange={(e) => setProfile(p => ({ ...p, price_max: e.target.value }))}
//                     placeholder="2000"
//                     min="0"
//                   />
//                 </label>
//                 <label className="text-sm">
//                   <span className="block text-gray-600 mb-1">Notify Channel</span>
//                   <select
//                     className="w-full border rounded-lg px-3 py-2"
//                     value={profile.notify_channel || ""}
//                     onChange={(e) => setProfile(p => ({ ...p, notify_channel: e.target.value }))}
//                   >
//                     <option value="">Select</option>
//                     <option value="web">Web</option>
//                     <option value="telegram">Telegram</option>
//                     <option value="email">Email</option>
//                     <option value="sms">SMS</option>
//                   </select>
//                 </label>
//               </section>

//               {/* Measurements */}
//               <section>
//                 <h4 className="font-semibold mb-2">Measurements</h4>
//                 <div className="grid grid-cols-3 gap-3">
//                   {["chest","waist","hip"].map((k) => (
//                     <label key={k} className="text-sm">
//                       <span className="block text-gray-600 mb-1 capitalize">{k}</span>
//                       <input
//                         type="number"
//                         className="w-full border rounded-lg px-3 py-2"
//                         value={profile.measurements?.[k] ?? ""}
//                         onChange={(e) => setProfile(p => ({ ...p, measurements: { ...(p.measurements||{}), [k]: e.target.value } }))}
//                         placeholder="inches"
//                         min="0"
//                       />
//                     </label>
//                   ))}
//                 </div>
//               </section>

//               {/* Delete keys */}
//               <section className="border rounded-xl p-3">
//                 <div className="flex items-center justify-between">
//                   <h4 className="font-semibold">Delete fields</h4>
//                   <button
//                     type="button"
//                     disabled={deleting || !deleteKeys.length}
//                     onClick={handleDelete}
//                     className="px-3 py-1.5 rounded-lg text-white bg-red-500 disabled:opacity-50"
//                   >
//                     {deleting ? "Deleting..." : `Delete ${deleteKeys.length || ""}`}
//                   </button>
//                 </div>
//                 <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
//                   {["sizes","fit","style","colors","price_min","price_max","preferred_store","city","brand_prefs","notify_channel","measurements"]
//                     .map((k) => (
//                     <label key={k} className="inline-flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         checked={deleteKeys.includes(k)}
//                         onChange={() => toggleKey(k)}
//                       />
//                       <span>{k}</span>
//                     </label>
//                   ))}
//                 </div>
//               </section>
//             </form>
//           )}
//         </div>

//         <div className="flex items-center justify-end gap-2 px-6 py-4 border-t">
//           <button className="px-4 py-2 rounded-lg border" onClick={onClose}>Close</button>
//           <button
//             onClick={handleSave}
//             disabled={saving}
//             className="px-4 py-2 rounded-lg text-white bg-[var(--brand-primary)] disabled:opacity-50"
//           >
//             {saving ? "Saving..." : "Save"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useMemo, useState } from "react";
// import { api } from "../utils/api";
// import useAuth from "../store/useAuth";

// export default function ProfileModal({ open, onClose }) {
//   const { token } = useAuth();

//   const [loading, setLoading] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [deleting, setDeleting] = useState(false);
//   const [showAdvanced, setShowAdvanced] = useState(false);

//   const [profile, setProfile] = useState({
//     sizes: { shirt: "", pant: "", shoe: "", tshirt: "", kurta: "" },
//     fit: "",
//     style: [],
//     colors: [],
//     price_min: "",
//     price_max: "",
//     preferred_store: "",
//     city: "",
//     brand_prefs: [],
//     notify_channel: "",
//     measurements: { chest: "", waist: "", hip: "" },
//     gender: "",
//     updated_at: ""
//   });

//   const styleCSV  = useMemo(() => (profile.style || []).join(", "), [profile.style]);
//   const colorsCSV = useMemo(() => (profile.colors || []).join(", "), [profile.colors]);
//   const brandsCSV = useMemo(() => (profile.brand_prefs || []).join(", "), [profile.brand_prefs]);

//   useEffect(() => {
//     if (!open || !token) return;
//     (async () => {
//       setLoading(true);
//       try {
//         const { data } = await api.get("/me/manual");
//         setProfile((prev) => ({
//           ...prev,
//           ...(data || {}),
//           sizes: { shirt:"", pant:"", shoe:"", tshirt:"", kurta:"", ...(data?.sizes || {}) },
//           measurements: { chest:"", waist:"", hip:"", ...(data?.measurements || {}) },
//           gender: data?.gender || ""
//         }));
//       } catch (e) {
//         console.error("Load profile failed", e);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [open, token]);

//   const handleSave = async () => {
//     setSaving(true);
//     try {
//       const payload = {};
//       const nonEmptyArr = (arr) => Array.isArray(arr) ? arr.map(s => s.trim()).filter(Boolean) : undefined;

//       if (profile.sizes) {
//         const s = Object.fromEntries(Object.entries(profile.sizes).filter(([,v]) => String(v || "").trim() !== ""));
//         if (Object.keys(s).length) payload.sizes = s;
//       }
//       if (profile.measurements) {
//         const m = Object.fromEntries(Object.entries(profile.measurements).filter(([,v]) => String(v || "").trim() !== ""));
//         if (Object.keys(m).length) payload.measurements = m;
//       }
//       if (profile.fit?.trim()) payload.fit = profile.fit.trim();
//       const sArr = nonEmptyArr(profile.style);        if (sArr?.length) payload.style = sArr;
//       const cArr = nonEmptyArr(profile.colors);       if (cArr?.length) payload.colors = cArr;
//       const bArr = nonEmptyArr(profile.brand_prefs);  if (bArr?.length) payload.brand_prefs = bArr;

//       const pm = Number(profile.price_min);
//       const px = Number(profile.price_max);
//       if (!Number.isNaN(pm) && profile.price_min !== "") payload.price_min = pm;
//       if (!Number.isNaN(px) && profile.price_max !== "") payload.price_max = px;

//       if (profile.preferred_store?.trim()) payload.preferred_store = profile.preferred_store.trim();
//       if (profile.city?.trim()) payload.city = profile.city.trim();
//       if (profile.notify_channel?.trim()) payload.notify_channel = profile.notify_channel.trim();
//       if (profile.gender?.trim()) payload.gender = profile.gender.trim();

//       const { data } = await api.put("/me/manual", payload);
//       setProfile((p) => ({ ...p, ...data }));
//     } catch (e) {
//       console.error("Save profile failed", e);
//       alert("Could not save profile.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const [deleteKeys, setDeleteKeys] = useState([]);
//   const toggleKey = (k) => {
//     setDeleteKeys((prev) => prev.includes(k) ? prev.filter(x => x !== k) : [...prev, k]);
//   };
//   const handleDelete = async () => {
//     if (!deleteKeys.length) return;
//     if (!window.confirm(`Delete: ${deleteKeys.join(", ")} ?`)) return;
//     setDeleting(true);
//     try {
//       const { data } = await api.delete("/me/manual", { data: { keys: deleteKeys } });
//       setProfile((p) => ({
//         ...p,
//         ...data,
//         sizes: { shirt:"", pant:"", shoe:"", tshirt:"", kurta:"", ...(data?.sizes || {}) },
//         measurements: { chest:"", waist:"", hip:"", ...(data?.measurements || {}) },
//         gender: data?.gender || ""
//       }));
//       setDeleteKeys([]);
//     } catch (e) {
//       console.error("Delete keys failed", e);
//       alert("Could not delete selected keys.");
//     } finally {
//       setDeleting(false);
//     }
//   };

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50">
//       <div className="absolute inset-0 bg-black/40" onClick={onClose} />
//       <div className="absolute inset-x-0 top-10 mx-auto w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
//         <div className="flex items-center justify-between px-6 py-4 border-b">
//           <h3 className="text-lg font-semibold">Your Profile</h3>
//           <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>✕</button>
//         </div>

//         <div className="max-h-[70vh] overflow-y-auto px-6 py-4">
//           {loading ? (
//             <div className="py-10 text-center text-gray-500">Loading…</div>
//           ) : (
//             <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
//               <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 <label className="text-sm">
//                   <span className="block text-gray-600 mb-1">Preferred Store</span>
//                   <input
//                     className="w-full border rounded-lg px-3 py-2"
//                     value={profile.preferred_store || ""}
//                     onChange={(e) => setProfile(p => ({ ...p, preferred_store: e.target.value }))}
//                     placeholder="S1"
//                   />
//                 </label>
//                 <label className="text-sm">
//                   <span className="block text-gray-600 mb-1">City</span>
//                   <input
//                     className="w-full border rounded-lg px-3 py-2"
//                     value={profile.city || ""}
//                     onChange={(e) => setProfile(p => ({ ...p, city: e.target.value }))}
//                     placeholder="Bengaluru"
//                   />
//                 </label>
//                 <label className="text-sm">
//                   <span className="block text-gray-600 mb-1">Gender</span>
//                   <select
//                     className="w-full border rounded-lg px-3 py-2"
//                     value={profile.gender || ""}
//                     onChange={(e) => setProfile(p => ({ ...p, gender: e.target.value }))}
//                   >
//                     <option value="">Select</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="non-binary">Non-binary</option>
//                     <option value="prefer-not-to-say">Prefer not to say</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </label>
//                 <label className="text-sm">
//                   <span className="block text-gray-600 mb-1">Notify Channel</span>
//                   <select
//                     className="w-full border rounded-lg px-3 py-2"
//                     value={profile.notify_channel || ""}
//                     onChange={(e) => setProfile(p => ({ ...p, notify_channel: e.target.value }))}
//                   >
//                     <option value="">Select</option>
//                     <option value="web">Web</option>
//                     <option value="telegram">Telegram</option>
//                     <option value="email">Email</option>
//                     <option value="sms">SMS</option>
//                   </select>
//                 </label>
//               </section>

//               <div className="flex items-center justify-between">
//                 <button
//                   type="button"
//                   onClick={() => setShowAdvanced(s => !s)}
//                   className="px-3 py-2 rounded-lg border"
//                 >
//                   {showAdvanced ? "Hide Advanced" : "Show Advanced"}
//                 </button>
//               </div>

//               {showAdvanced && (
//                 <div className="space-y-6">
//                   <section>
//                     <h4 className="font-semibold mb-2">Sizes</h4>
//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//                       {["shirt","pant","shoe","tshirt","kurta"].map((k) => (
//                         <label key={k} className="text-sm">
//                           <span className="block text-gray-600 mb-1 capitalize">{k}</span>
//                           <input
//                             className="w-full border rounded-lg px-3 py-2"
//                             value={profile.sizes?.[k] || ""}
//                             onChange={(e) => setProfile(p => ({ ...p, sizes: { ...(p.sizes||{}), [k]: e.target.value } }))}
//                             placeholder={k === "shoe" ? "9" : (k === "pant" ? "32" : "M")}
//                           />
//                         </label>
//                       ))}
//                     </div>
//                   </section>

//                   <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
//                     <label className="text-sm">
//                       <span className="block text-gray-600 mb-1">Fit</span>
//                       <select
//                         className="w-full border rounded-lg px-3 py-2"
//                         value={profile.fit || ""}
//                         onChange={(e) => setProfile(p => ({ ...p, fit: e.target.value }))}
//                       >
//                         <option value="">Select</option>
//                         <option value="slim">Slim</option>
//                         <option value="regular">Regular</option>
//                         <option value="relaxed">Relaxed</option>
//                       </select>
//                     </label>
//                     <label className="text-sm">
//                       <span className="block text-gray-600 mb-1">Price Min</span>
//                       <input
//                         type="number"
//                         className="w-full border rounded-lg px-3 py-2"
//                         value={profile.price_min ?? ""}
//                         onChange={(e) => setProfile(p => ({ ...p, price_min: e.target.value }))}
//                         placeholder="0"
//                         min="0"
//                       />
//                     </label>
//                     <label className="text-sm">
//                       <span className="block text-gray-600 mb-1">Price Max</span>
//                       <input
//                         type="number"
//                         className="w-full border rounded-lg px-3 py-2"
//                         value={profile.price_max ?? ""}
//                         onChange={(e) => setProfile(p => ({ ...p, price_max: e.target.value }))}
//                         placeholder="2000"
//                         min="0"
//                       />
//                     </label>
//                   </section>

//                   <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
//                     <label className="text-sm">
//                       <span className="block text-gray-600 mb-1">Style (comma separated)</span>
//                       <input
//                         className="w-full border rounded-lg px-3 py-2"
//                         value={styleCSV}
//                         onChange={(e) =>
//                           setProfile(p => ({ ...p, style: e.target.value.split(",").map(s => s.trim()).filter(Boolean) }))
//                         }
//                         placeholder="formal, minimal"
//                       />
//                     </label>
//                     <label className="text-sm">
//                       <span className="block text-gray-600 mb-1">Colors (comma separated)</span>
//                       <input
//                         className="w-full border rounded-lg px-3 py-2"
//                         value={colorsCSV}
//                         onChange={(e) =>
//                           setProfile(p => ({ ...p, colors: e.target.value.split(",").map(s => s.trim()).filter(Boolean) }))
//                         }
//                         placeholder="white, navy"
//                       />
//                     </label>
//                     <label className="text-sm">
//                       <span className="block text-gray-600 mb-1">Brands (comma separated)</span>
//                       <input
//                         className="w-full border rounded-lg px-3 py-2"
//                         value={brandsCSV}
//                         onChange={(e) =>
//                           setProfile(p => ({ ...p, brand_prefs: e.target.value.split(",").map(s => s.trim()).filter(Boolean) }))
//                         }
//                         placeholder="Allen Solly, Louis Philippe"
//                       />
//                     </label>
//                   </section>

//                   <section>
//                     <h4 className="font-semibold mb-2">Measurements</h4>
//                     <div className="grid grid-cols-3 gap-3">
//                       {["chest","waist","hip"].map((k) => (
//                         <label key={k} className="text-sm">
//                           <span className="block text-gray-600 mb-1 capitalize">{k}</span>
//                           <input
//                             type="number"
//                             className="w-full border rounded-lg px-3 py-2"
//                             value={profile.measurements?.[k] ?? ""}
//                             onChange={(e) => setProfile(p => ({ ...p, measurements: { ...(p.measurements||{}), [k]: e.target.value } }))}
//                             placeholder="inches"
//                             min="0"
//                           />
//                         </label>
//                       ))}
//                     </div>
//                   </section>

//                   <section className="border rounded-xl p-3">
//                     <div className="flex items-center justify-between">
//                       <h4 className="font-semibold">Delete fields</h4>
//                       <button
//                         type="button"
//                         disabled={deleting || !deleteKeys.length}
//                         onClick={handleDelete}
//                         className="px-3 py-1.5 rounded-lg text-white bg-red-500 disabled:opacity-50"
//                       >
//                         {deleting ? "Deleting..." : `Delete ${deleteKeys.length || ""}`}
//                       </button>
//                     </div>
//                     <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
//                       {["sizes","fit","style","colors","price_min","price_max","preferred_store","city","brand_prefs","notify_channel","measurements","gender"].map((k) => (
//                         <label key={k} className="inline-flex items-center gap-2">
//                           <input
//                             type="checkbox"
//                             checked={deleteKeys.includes(k)}
//                             onChange={() => toggleKey(k)}
//                           />
//                           <span>{k}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </section>
//                 </div>
//               )}
//             </form>
//           )}
//         </div>

//         <div className="flex items-center justify-end gap-2 px-6 py-4 border-t">
//           <button className="px-4 py-2 rounded-lg border" onClick={onClose}>Close</button>
//           <button
//             onClick={handleSave}
//             disabled={saving}
//             className="px-4 py-2 rounded-lg text-white bg-[var(--brand-primary)] disabled:opacity-50"
//           >
//             {saving ? "Saving..." : "Save"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useMemo, useState } from "react";
import { api } from "../utils/api";
import useAuth from "../store/useAuth";

export default function ProfileModal({ open, onClose }) {
  const { token } = useAuth();

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [userMeta, setUserMeta] = useState({ name: "", email: "", phone_number: "", telegram_id: "" });

  const [profile, setProfile] = useState({
    sizes: { shirt: "", pant: "", shoe: "", tshirt: "", kurta: "" },
    fit: "",
    style: [],
    colors: [],
    price_min: "",
    price_max: "",
    preferred_store: "",
    city: "",
    brand_prefs: [],
    notify_channel: "",
    measurements: { chest: "", waist: "", hip: "" },
    gender: "",
    updated_at: ""
  });

  const styleCSV  = useMemo(() => (profile.style || []).join(", "), [profile.style]);
  const colorsCSV = useMemo(() => (profile.colors || []).join(", "), [profile.colors]);
  const brandsCSV = useMemo(() => (profile.brand_prefs || []).join(", "), [profile.brand_prefs]);

  useEffect(() => {
    if (!open || !token) return;
    (async () => {
      setLoading(true);
      try {
        const { data } = await api.get("/me/manual");
        const prof = data?.profile ?? data ?? {};
        setUserMeta({
          name: data?.user?.name || "",
          email: data?.user?.email || "",
          phone_number: data?.user?.phone_number || "",
          telegram_id: data?.user?.telegram_id || ""
        });
        setProfile((prev) => ({
          ...prev,
          ...prof,
          sizes: { shirt: "", pant: "", shoe: "", tshirt: "", kurta: "", ...(prof?.sizes || {}) },
          measurements: { chest: "", waist: "", hip: "", ...(prof?.measurements || {}) },
          gender: prof?.gender || ""
        }));
      } catch (e) {
        console.error("Load profile failed", e);
      } finally {
        setLoading(false);
      }
    })();
  }, [open, token]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const payload = {};
      const nonEmptyArr = (arr) => Array.isArray(arr) ? arr.map(s => s.trim()).filter(Boolean) : undefined;

      if (profile.sizes) {
        const s = Object.fromEntries(Object.entries(profile.sizes).filter(([,v]) => String(v || "").trim() !== ""));
        if (Object.keys(s).length) payload.sizes = s;
      }
      if (profile.measurements) {
        const m = Object.fromEntries(Object.entries(profile.measurements).filter(([,v]) => String(v || "").trim() !== ""));
        if (Object.keys(m).length) payload.measurements = m;
      }
      if (profile.fit?.trim()) payload.fit = profile.fit.trim();
      const sArr = nonEmptyArr(profile.style);        if (sArr?.length) payload.style = sArr;
      const cArr = nonEmptyArr(profile.colors);       if (cArr?.length) payload.colors = cArr;
      const bArr = nonEmptyArr(profile.brand_prefs);  if (bArr?.length) payload.brand_prefs = bArr;

      const pm = Number(profile.price_min);
      const px = Number(profile.price_max);
      if (!Number.isNaN(pm) && profile.price_min !== "") payload.price_min = pm;
      if (!Number.isNaN(px) && profile.price_max !== "") payload.price_max = px;

      if (profile.preferred_store?.trim()) payload.preferred_store = profile.preferred_store.trim();
      if (profile.city?.trim()) payload.city = profile.city.trim();
      if (profile.notify_channel?.trim()) payload.notify_channel = profile.notify_channel.trim();
      if (profile.gender?.trim()) payload.gender = profile.gender.trim();

      const { data } = await api.put("/me/manual", payload);
      const prof = data?.profile ?? data ?? {};
      setUserMeta({
        name: data?.user?.name ?? userMeta.name,
        email: data?.user?.email ?? userMeta.email,
        phone_number: data?.user?.phone_number ?? userMeta.phone_number,
        telegram_id: data?.user?.telegram_id ?? userMeta.telegram_id
      });
      setProfile((p) => ({
        ...p,
        ...prof,
        sizes: { shirt: "", pant: "", shoe: "", tshirt: "", kurta: "", ...(prof?.sizes || p.sizes) },
        measurements: { chest: "", waist: "", hip: "", ...(prof?.measurements || p.measurements) },
        gender: prof?.gender ?? p.gender
      }));
    } catch (e) {
      console.error("Save profile failed", e);
      alert("Could not save profile.");
    } finally {
      setSaving(false);
    }
  };


  const [locating, setLocating] = useState(false);

async function reverseGeocode(lat, lon) {
  const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`, { headers: { Accept: "application/json" } });
  const j = await r.json();
  const a = j?.address || {};
  const city = a.city || a.town || a.village || a.district || a.county || a.state || "";
  if (city) setProfile(p => ({ ...p, city }));
}

function handleLocate() {
  if (!("geolocation" in navigator)) { alert("Geolocation not supported"); return; }
  setLocating(true);
  navigator.geolocation.getCurrentPosition(
    async pos => {
      try { await reverseGeocode(pos.coords.latitude, pos.coords.longitude); }
      catch { alert("Could not determine city"); }
      finally { setLocating(false); }
    },
    () => { alert("Permission denied or unavailable"); setLocating(false); },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 }
  );
}


  const [deleteKeys, setDeleteKeys] = useState([]);
  const toggleKey = (k) => {
    setDeleteKeys((prev) => prev.includes(k) ? prev.filter(x => x !== k) : [...prev, k]);
  };
  const handleDelete = async () => {
    if (!deleteKeys.length) return;
    if (!window.confirm(`Delete: ${deleteKeys.join(", ")} ?`)) return;
    setDeleting(true);
    try {
      const { data } = await api.delete("/me/manual", { data: { keys: deleteKeys } });
      const prof = data?.profile ?? data ?? {};
      setUserMeta({
        name: data?.user?.name ?? userMeta.name,
        email: data?.user?.email ?? userMeta.email,
        phone_number: data?.user?.phone_number ?? userMeta.phone_number,
        telegram_id: data?.user?.telegram_id ?? userMeta.telegram_id
      });
      setProfile((p) => ({
        ...p,
        ...prof,
        sizes: { shirt:"", pant:"", shoe:"", tshirt:"", kurta:"", ...(prof?.sizes || {}) },
        measurements: { chest:"", waist:"", hip:"", ...(prof?.measurements || {}) },
        gender: prof?.gender || ""
      }));
      setDeleteKeys([]);
    } catch (e) {
      console.error("Delete keys failed", e);
      alert("Could not delete selected keys.");
    } finally {
      setDeleting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-x-0 top-10 mx-auto w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Your Profile</h3>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>✕</button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-4">
          {loading ? (
            <div className="py-10 text-center text-gray-500">Loading…</div>
          ) : (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
              {/* Account (now in main) */}
              <section>
                <h4 className="font-semibold mb-2">Account</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <label className="text-sm">
                    <span className="block text-gray-600 mb-1">Name</span>
                    <input className="w-full border rounded-lg px-3 py-2 bg-gray-50" value={userMeta.name} readOnly />
                  </label>
                  <label className="text-sm">
                    <span className="block text-gray-600 mb-1">Email</span>
                    <input className="w-full border rounded-lg px-3 py-2 bg-gray-50" value={userMeta.email} readOnly />
                  </label>
                  <label className="text-sm">
                    <span className="block text-gray-600 mb-1">Phone</span>
                    <input className="w-full border rounded-lg px-3 py-2 bg-gray-50" value={userMeta.phone_number} readOnly />
                  </label>
                  <label className="text-sm">
                    <span className="block text-gray-600 mb-1">Telegram ID</span>
                    <input className="w-full border rounded-lg px-3 py-2 bg-gray-50" value={userMeta.telegram_id} readOnly />
                  </label>
                </div>
              </section>

              {/* Basic prefs (stay in main) */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* <label className="text-sm">
                  <span className="block text-gray-600 mb-1">City</span>
                  <input
                    className="w-full border rounded-lg px-3 py-2"
                    value={profile.city || ""}
                    onChange={(e) => setProfile(p => ({ ...p, city: e.target.value }))}
                    placeholder="Bengaluru"
                  />
                </label> */}
                <label className="text-sm">
  <span className="block text-gray-600 mb-1">City</span>
  <div className="flex gap-2">
    <input
      className="w-full border rounded-lg px-3 py-2 flex-1"
      value={profile.city || ""}
      onChange={(e) => setProfile(p => ({ ...p, city: e.target.value }))}
      placeholder="Bengaluru"
    />
    <button
      type="button"
      onClick={handleLocate}
      disabled={locating}
      className="px-3 py-2 rounded-lg border whitespace-nowrap"
    >
      {locating ? "Locating…" : "Locate me"}
    </button>
  </div>
</label>

                <label className="text-sm">
                  <span className="block text-gray-600 mb-1">Preferred Store</span>
                  <input
                    className="w-full border rounded-lg px-3 py-2"
                    value={profile.preferred_store || ""}
                    onChange={(e) => setProfile(p => ({ ...p, preferred_store: e.target.value }))}
                    placeholder="S1"
                  />
                </label>
                <label className="text-sm">
                  <span className="block text-gray-600 mb-1">Gender</span>
                  <select
                    className="w-full border rounded-lg px-3 py-2"
                    value={profile.gender || ""}
                    onChange={(e) => setProfile(p => ({ ...p, gender: e.target.value }))}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label className="text-sm">
                  <span className="block text-gray-600 mb-1">Notify Channel</span>
                  <select
                    className="w-full border rounded-lg px-3 py-2"
                    value={profile.notify_channel || ""}
                    onChange={(e) => setProfile(p => ({ ...p, notify_channel: e.target.value }))}
                  >
                    <option value="">Select</option>
                    <option value="web">Web</option>
                    <option value="telegram">Telegram</option>
                    <option value="email">Email</option>
                    <option value="sms">SMS</option>
                  </select>
                </label>
              </section>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setShowAdvanced(s => !s)}
                  className="px-3 py-2 rounded-lg border"
                >
                  {showAdvanced ? "Hide Advanced" : "Show Advanced"}
                </button>
              </div>

              {showAdvanced && (
                <div className="space-y-6">
                  <section>
                    <h4 className="font-semibold mb-2">Sizes</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {["shirt","pant","shoe","tshirt","kurta"].map((k) => (
                        <label key={k} className="text-sm">
                          <span className="block text-gray-600 mb-1 capitalize">{k}</span>
                          <input
                            className="w-full border rounded-lg px-3 py-2"
                            value={profile.sizes?.[k] || ""}
                            onChange={(e) => setProfile(p => ({ ...p, sizes: { ...(p.sizes||{}), [k]: e.target.value } }))}
                            placeholder={k === "shoe" ? "9" : (k === "pant" ? "32" : "M")}
                          />
                        </label>
                      ))}
                    </div>
                  </section>

                  <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <label className="text-sm">
                      <span className="block text-gray-600 mb-1">Fit</span>
                      <select
                        className="w-full border rounded-lg px-3 py-2"
                        value={profile.fit || ""}
                        onChange={(e) => setProfile(p => ({ ...p, fit: e.target.value }))}
                      >
                        <option value="">Select</option>
                        <option value="slim">Slim</option>
                        <option value="regular">Regular</option>
                        <option value="relaxed">Relaxed</option>
                      </select>
                    </label>
                    <label className="text-sm">
                      <span className="block text-gray-600 mb-1">Price Min</span>
                      <input
                        type="number"
                        className="w-full border rounded-lg px-3 py-2"
                        value={profile.price_min ?? ""}
                        onChange={(e) => setProfile(p => ({ ...p, price_min: e.target.value }))}
                        placeholder="0"
                        min="0"
                      />
                    </label>
                    <label className="text-sm">
                      <span className="block text-gray-600 mb-1">Price Max</span>
                      <input
                        type="number"
                        className="w-full border rounded-lg px-3 py-2"
                        value={profile.price_max ?? ""}
                        onChange={(e) => setProfile(p => ({ ...p, price_max: e.target.value }))}
                        placeholder="2000"
                        min="0"
                      />
                    </label>
                  </section>

                  <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <label className="text-sm">
                      <span className="block text-gray-600 mb-1">Style (comma separated)</span>
                      <input
                        className="w-full border rounded-lg px-3 py-2"
                        value={styleCSV}
                        onChange={(e) =>
                          setProfile(p => ({ ...p, style: e.target.value.split(",").map(s => s.trim()).filter(Boolean) }))
                        }
                        placeholder="formal, minimal"
                      />
                    </label>
                    <label className="text-sm">
                      <span className="block text-gray-600 mb-1">Colors (comma separated)</span>
                      <input
                        className="w-full border rounded-lg px-3 py-2"
                        value={colorsCSV}
                        onChange={(e) =>
                          setProfile(p => ({ ...p, colors: e.target.value.split(",").map(s => s.trim()).filter(Boolean) }))
                        }
                        placeholder="white, navy"
                      />
                    </label>
                    <label className="text-sm">
                      <span className="block text-gray-600 mb-1">Brands (comma separated)</span>
                      <input
                        className="w-full border rounded-lg px-3 py-2"
                        value={brandsCSV}
                        onChange={(e) =>
                          setProfile(p => ({ ...p, brand_prefs: e.target.value.split(",").map(s => s.trim()).filter(Boolean) }))
                        }
                        placeholder="Allen Solly, Louis Philippe"
                      />
                    </label>
                  </section>

                  <section>
                    <h4 className="font-semibold mb-2">Measurements</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {["chest","waist","hip"].map((k) => (
                        <label key={k} className="text-sm">
                          <span className="block text-gray-600 mb-1 capitalize">{k}</span>
                          <input
                            type="number"
                            className="w-full border rounded-lg px-3 py-2"
                            value={profile.measurements?.[k] ?? ""}
                            onChange={(e) => setProfile(p => ({ ...p, measurements: { ...(p.measurements||{}), [k]: e.target.value } }))}
                            placeholder="inches"
                            min="0"
                          />
                        </label>
                      ))}
                    </div>
                  </section>

                  <section className="border rounded-xl p-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Delete fields</h4>
                      <button
                        type="button"
                        disabled={deleting || !deleteKeys.length}
                        onClick={handleDelete}
                        className="px-3 py-1.5 rounded-lg text-white bg-red-500 disabled:opacity-50"
                      >
                        {deleting ? "Deleting..." : `Delete ${deleteKeys.length || ""}`}
                      </button>
                    </div>
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      {["sizes","fit","style","colors","price_min","price_max","preferred_store","city","brand_prefs","notify_channel","measurements","gender"].map((k) => (
                        <label key={k} className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={deleteKeys.includes(k)}
                            onChange={() => toggleKey(k)}
                          />
                          <span>{k}</span>
                        </label>
                      ))}
                    </div>
                  </section>
                </div>
              )}
            </form>
          )}
        </div>

        <div className="flex items-center justify-end gap-2 px-6 py-4 border-t">
          <button className="px-4 py-2 rounded-lg border" onClick={onClose}>Close</button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 rounded-lg text-white bg-[var(--brand-primary)] disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
