<template>
  <div class="p-6 space-y-6">
    <!-- Form Tambah / Edit -->
    <div class="bg-white shadow rounded p-4">
      <h2 class="text-lg font-semibold mb-3">{{ isEdit ? "Edit Slide" : "Tambah Slide" }}</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <!-- Upload Gambar -->
        <div>
          <label class="block mb-1 font-medium">Gambar</label>
          <input type="file" @change="onFileChange" class="w-full border rounded p-2" />
          <img v-if="form.preview" :src="form.preview" class="mt-2 w-full h-40 object-cover rounded" />
        </div>
        <!-- Headline -->
        <div>
          <label class="block mb-1 font-medium">Headline</label>
          <input v-model="form.headline" type="text" class="w-full border rounded p-2" placeholder="..." />
        </div>
      </div>
      <div class="mt-4 space-x-2">
        <button @click="isEdit ? updateSlide() : createSlide()" class="bg-blue-600 text-white px-4 py-2 rounded">
          {{ isEdit ? "Update" : "Simpan" }}
        </button>
        <button v-if="isEdit" @click="cancelEdit()" class="bg-gray-400 text-white px-4 py-2 rounded">Batal</button>
      </div>
    </div>

    <!-- Daftar Data -->
    <div class="bg-white shadow rounded p-4">
      <h2 class="text-lg font-semibold mb-3">Daftar Slide</h2>
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-100">
            <th class="border p-2">Gambar</th>
            <th class="border p-2">Headline</th>
            <th class="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="slide in slides" :key="slide.id">
            <td class="border p-2 text-center">
              <img :src="`http://127.0.0.1:8000/storage/${slide.image}`" class="w-32 h-20 object-cover mx-auto rounded" />
            </td>
            <td class="border p-2 text-center">{{ slide.headline }}</td>
            <td class="border p-2 text-center">
              <button @click="editSlide(slide)" class="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Edit</button>
              <button @click="deleteSlide(slide.id)" class="bg-red-500 text-white px-3 py-1 rounded">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      slides: [],
      isEdit: false,
      form: { id: null, headline: "", file: null, preview: "" },
    };
  },
  mounted() {
    this.getSlides();
  },
  methods: {
    // GET semua data
    async getSlides() {
      const res = await axios.get("http://127.0.0.1:8000/api/slideshows");
      this.slides = res.data.slides;
    },

    // Event pilih file
    onFileChange(e) {
      const file = e.target.files[0];
      this.form.file = file;
      this.form.preview = URL.createObjectURL(file);
    },

    // CREATE
    async createSlide() {
      const formData = new FormData();
      formData.append("headline", this.form.headline);
      formData.append("image", this.form.file);

      await axios.post("http://127.0.0.1:8000/api/slideshows", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      this.resetForm();
      this.getSlides();
    },

    // EDIT
    editSlide(slide) {
      this.isEdit = true;
      this.form.id = slide.id;
      this.form.headline = slide.headline;
      this.form.preview = `http://127.0.0.1:8000/storage/${slide.image}`;
    },

    // UPDATE
    async updateSlide() {
      const formData = new FormData();
      formData.append("headline", this.form.headline);
      if (this.form.file) formData.append("image", this.form.file);

      await axios.post(`http://127.0.0.1:8000/api/slideshows/${this.form.id}`, formData, {
        headers: { "X-HTTP-Method-Override": "PUT" },
      });

      this.cancelEdit();
      this.getSlides();
    },

    // DELETE
    async deleteSlide(id) {
      if (!confirm("Yakin hapus data?")) return;
      await axios.delete(`http://127.0.0.1:8000/api/slideshows/${id}`);
      this.getSlides();
    },

    cancelEdit() {
      this.isEdit = false;
      this.resetForm();
    },

    resetForm() {
      this.form = { id: null, headline: "", file: null, preview: "" };
    },
  },
};
</script>
