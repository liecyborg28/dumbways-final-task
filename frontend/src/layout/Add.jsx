import { useState } from "react";

function Add() {
  const [form, setForm] = useState({
    project_name: "",
    description: "",
    techs: "",
    github_url: "",
    live_demo_url: "",
    image_file: null,
    image_url: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image_file") {
      setForm({ ...form, image_file: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.project_name.trim())
      newErrors.project_name = "Project name is required.";
    if (!form.description.trim())
      newErrors.description = "Description is required.";
    if (!form.techs.trim()) newErrors.techs = "Techs field is required.";
    if (!form.image_url) newErrors.image_file = "Image must be uploaded.";
    return newErrors;
  };

  const handleUpload = async () => {
    if (!form.image_file) return;
    const data = new FormData();
    data.append("image", form.image_file);

    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: data,
      });
      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Upload failed");
      setForm((prev) => ({ ...prev, image_url: result.url }));
    } catch (err) {
      setModalMessage({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          project_name: form.project_name,
          description: form.description,
          techs: form.techs,
          github_url: form.github_url,
          live_demo_url: form.live_demo_url,
          image_url: form.image_url,
        }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Submission failed");

      setModalMessage({
        type: "success",
        text: "Project successfully submitted!",
      });
      setForm({
        project_name: "",
        description: "",
        techs: "",
        github_url: "",
        live_demo_url: "",
        image_file: null,
        image_url: "",
      });
    } catch (err) {
      setModalMessage({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 shadow-2xl rounded-3xl mt-10 relative">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">
        🚀 Add Project
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Project Name */}
        <div>
          <label className="block text-sm font-semibold text-purple-700 mb-1">
            Project Name *
          </label>
          <input
            type="text"
            name="project_name"
            value={form.project_name}
            onChange={handleChange}
            className="w-full border border-purple-300 rounded-xl px-4 py-2 bg-white text-gray-800"
            placeholder="e.g. Portfolio Website"
          />
          {errors.project_name && (
            <p className="text-red-500 text-sm mt-1">{errors.project_name}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-purple-700 mb-1">
            Description *
          </label>
          <textarea
            name="description"
            rows="4"
            value={form.description}
            onChange={handleChange}
            className="resize-y w-full border border-purple-300 rounded-xl px-4 py-2 bg-white text-gray-800"
            placeholder="Describe your project..."
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        {/* Techs */}
        <div>
          <label className="block text-sm font-semibold text-purple-700 mb-1">
            Techs *
          </label>
          <textarea
            name="techs"
            rows="2"
            value={form.techs}
            onChange={handleChange}
            className="resize-y w-full border border-purple-300 rounded-xl px-4 py-2 bg-white text-gray-800"
            placeholder="e.g. React, Tailwind, Node.js"
          />
          {errors.techs && (
            <p className="text-red-500 text-sm mt-1">{errors.techs}</p>
          )}
        </div>

        {/* GitHub URL */}
        <div>
          <label className="block text-sm font-semibold text-purple-700 mb-1">
            GitHub Repository
          </label>
          <input
            type="text"
            name="github_url"
            value={form.github_url}
            onChange={handleChange}
            className="w-full border border-purple-300 rounded-xl px-4 py-2 bg-white text-gray-800"
            placeholder="https://github.com/your-repo"
          />
        </div>

        {/* Live Demo URL */}
        <div>
          <label className="block text-sm font-semibold text-purple-700 mb-1">
            Live Demo URL
          </label>
          <input
            type="text"
            name="live_demo_url"
            value={form.live_demo_url}
            onChange={handleChange}
            className="w-full border border-purple-300 rounded-xl px-4 py-2 bg-white text-gray-800"
            placeholder="https://your-project.com"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-purple-700 mb-1">
            Project Image *
          </label>
          <div className="flex flex-col gap-2">
            <input
              type="file"
              name="image_file"
              accept="image/*"
              onChange={handleChange}
              className="bg-white text-gray-800 border border-purple-300 px-4 py-2 rounded-xl"
            />
            <button
              type="button"
              onClick={handleUpload}
              className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 w-fit">
              Upload Image
            </button>
            {form.image_url && (
              <img
                src={form.image_url}
                alt="Preview"
                className="w-full max-h-60 object-contain border rounded-xl mt-2"
              />
            )}
            {errors.image_file && (
              <p className="text-red-500 text-sm mt-1">{errors.image_file}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all">
            🎉 Submit Project
          </button>
        </div>
      </form>

      {/* Loading Modal */}
      {loading && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-purple-500 mb-4"></div>
            <p className="text-purple-700 font-medium">Processing...</p>
          </div>
        </div>
      )}

      {/* Message Modal */}
      {modalMessage && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm text-center">
            <p
              className={`text-lg font-semibold ${
                modalMessage.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }`}>
              {modalMessage.text}
            </p>
            <button
              onClick={() => setModalMessage(null)}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Add;
