<template>
  <!-- Modal Add Candidate -->
  <div
    class="modal-add-candidate-overlay commons-w-full commons-h-full commons-flex-center-all"
    id="modalAddCandidate"
    @click.self="closeModal"
  >
    <div class="modal-add-candidate commons-flex-col commons-rounded-4 commons-bg-white">
      <div class="modal-add-candidate-header commons-flex-between">
        <h2 class="modal-add-candidate-title commons-fw-700">Add candidate</h2>
        <button
          class="modal-add-candidate-close commons-relative commons-flex-center-all commons-border-none commons-pointer"
          id="closeModalAddCandidate"
          @click="closeModal"
        ></button>
      </div>

      <div class="modal-add-candidate-body commons-flex-1">
        <FileUpload @file-selected="handleFileSelected" />
        <div class="modal-add-candidate-form commons-display-flex">
          <div
            class="modal-add-candidate-avatar commons-rounded-full commons-flex-center-all commons-flex-shrink-0 commons-pointer"
          >
            <span class="modal-add-candidate-avatar-text commons-fs-13">Photo</span>
          </div>

          <div class="modal-add-candidate-fields commons-flex-1 commons-flex-col">
            <FormInput
              v-model="formData.fullName"
              label="Full name"
              placeholder="Enter full name"
              required
              id="fullName"
            />

            <div class="modal-add-candidate-row-labels commons-display-flex">
              <div class="modal-add-candidate-row-label commons-flex-1 commons-flex-center">
                <span
                  class="modal-add-candidate-row-label-text commons-fs-14 commons-fw-500 commons-color-primary"
                  >Date of birth</span
                >
                <span class="modal-add-candidate-row-label-hint commons-fs-14">Day month year</span>
              </div>
              <div class="modal-add-candidate-row-label commons-flex-1 commons-flex-center">
                <span
                  class="modal-add-candidate-row-label-text commons-fs-14 commons-fw-500 commons-color-primary"
                  >Sex</span
                >
              </div>
            </div>
            <div class="modal-add-candidate-row commons-display-flex">
              <div class="modal-add-candidate-row-item commons-flex-1">
                <FormDate v-model="formData.dateOfBirth" placeholder="dd/MM/yyyy" />
              </div>
              <div class="modal-add-candidate-row-item commons-flex-1">
                <FormSelect
                  v-model="formData.gender"
                  :options="genderOptions"
                  placeholder="Choose gender"
                />
              </div>
            </div>

            <FormSelect
              v-model="formData.area"
              label="Area"
              :options="areaOptions"
              placeholder="Select area"
            />

            <div class="modal-add-candidate-row-labels commons-display-flex">
              <div class="modal-add-candidate-row-label commons-flex-1 commons-flex-center">
                <span
                  class="modal-add-candidate-row-label-text commons-fs-14 commons-fw-500 commons-color-primary"
                  >Phone number</span
                >
              </div>
              <div class="modal-add-candidate-row-label commons-flex-1 commons-flex-center">
                <span
                  class="modal-add-candidate-row-label-text commons-fs-14 commons-fw-500 commons-color-primary"
                  >Email</span
                >
              </div>
            </div>
            <div class="modal-add-candidate-row commons-display-flex">
              <div class="modal-add-candidate-row-item commons-flex-1">
                <FormInput v-model="formData.phone" placeholder="Enter phone number" id="phone" />
              </div>
              <div class="modal-add-candidate-row-item commons-flex-1">
                <FormInput
                  v-model="formData.email"
                  type="email"
                  placeholder="Enter email"
                  id="email"
                />
              </div>
            </div>

            <FormInput
              v-model="formData.address"
              label="Address"
              placeholder="Enter address"
              id="address"
            />

            <div
              class="modal-add-candidate-section-title commons-fs-14 commons-fw-500 commons-color-primary"
            >
              EDUCATION
            </div>
            <div class="modal-add-candidate-education">
              <ul class="modal-add-candidate-education-list">
                <li class="modal-add-candidate-education-item">
                  <span
                    class="modal-add-candidate-education-item-label commons-fs-14 commons-fw-500 commons-color-primary"
                    >Training level</span
                  >
                  <div
                    class="modal-add-candidate-education-item-input commons-flex-1 commons-display-flex"
                  >
                    <FormSelect
                      v-model="formData.trainingLevel"
                      :options="trainingLevelOptions"
                      placeholder="Please enter training level"
                      class="commons-flex-1"
                    />
                  </div>
                </li>
                <li class="modal-add-candidate-education-item">
                  <span
                    class="modal-add-candidate-education-item-label commons-fs-14 commons-fw-500 commons-color-primary"
                    >Training place</span
                  >
                  <div
                    class="modal-add-candidate-education-item-input commons-flex-1 commons-display-flex"
                  >
                    <FormSelect
                      v-model="formData.trainingPlace"
                      :options="trainingPlaceOptions"
                      placeholder="Please enter training place"
                      class="commons-flex-1"
                    />
                  </div>
                </li>
                <li class="modal-add-candidate-education-item">
                  <span
                    class="modal-add-candidate-education-item-label commons-fs-14 commons-fw-500 commons-color-primary"
                    >Major</span
                  >
                  <div
                    class="modal-add-candidate-education-item-input commons-flex-1 commons-display-flex"
                  >
                    <FormSelect
                      v-model="formData.major"
                      :options="majorOptions"
                      placeholder="Enter major"
                      class="commons-flex-1"
                    />
                  </div>
                </li>
              </ul>
            </div>

            <div class="modal-add-candidate-row-labels commons-display-flex">
              <div class="modal-add-candidate-row-label commons-flex-1 commons-flex-center">
                <span
                  class="modal-add-candidate-row-label-text commons-fs-14 commons-fw-500 commons-color-primary"
                  >Application date</span
                >
                <span class="modal-add-candidate-required">*</span>
              </div>
              <div class="modal-add-candidate-row-label commons-flex-1 commons-flex-center">
                <span
                  class="modal-add-candidate-row-label-text commons-fs-14 commons-fw-500 commons-color-primary"
                  >Candidate source</span
                >
              </div>
            </div>
            <div class="modal-add-candidate-row commons-display-flex">
              <div class="modal-add-candidate-row-item commons-flex-1">
                <FormDate v-model="formData.applicationDate" placeholder="dd/MM/yyyy" />
              </div>
              <div class="modal-add-candidate-row-item commons-flex-1">
                <FormSelect
                  v-model="formData.candidateSource"
                  :options="sourceOptions"
                  placeholder="Select source"
                />
              </div>
            </div>

            <div class="modal-add-candidate-row-labels commons-display-flex">
              <div class="modal-add-candidate-row-label commons-flex-1 commons-flex-center">
                <span
                  class="modal-add-candidate-row-label-text commons-fs-14 commons-fw-500 commons-color-primary"
                  >Recommending staff</span
                >
              </div>
              <div class="modal-add-candidate-row-label commons-flex-1 commons-flex-center">
                <span
                  class="modal-add-candidate-row-label-text commons-fs-14 commons-fw-500 commons-color-primary"
                  >Collaborators</span
                >
              </div>
            </div>
            <div class="modal-add-candidate-row commons-display-flex">
              <div class="modal-add-candidate-row-item commons-flex-1">
                <FormSelect
                  v-model="formData.recommendingStaff"
                  :options="staffOptions"
                  placeholder="Select staff"
                />
              </div>
              <div class="modal-add-candidate-row-item commons-flex-1">
                <FormSelect
                  v-model="formData.collaborators"
                  :options="staffOptions"
                  placeholder="Select collaborators"
                />
              </div>
            </div>

            <div class="modal-add-candidate-row-labels commons-display-flex">
              <div class="modal-add-candidate-row-label commons-flex-1 commons-flex-center">
                <span
                  class="modal-add-candidate-row-label-text commons-fs-14 commons-fw-500 commons-color-primary"
                  >Recent Workplace</span
                >
              </div>
              <div class="modal-add-candidate-row-label commons-flex-1 commons-flex-center">
                <span
                  class="modal-add-candidate-row-label-text commons-fs-14 commons-fw-500 commons-color-primary"
                  >Workplace</span
                >
              </div>
            </div>
            <div class="modal-add-candidate-row commons-display-flex">
              <div class="modal-add-candidate-row-item commons-flex-1">
                <FormInput
                  v-model="formData.recentWorkplace"
                  placeholder="Enter recent workplace"
                  id="recentWorkplace"
                />
              </div>
              <div class="modal-add-candidate-row-item commons-flex-1">
                <FormInput
                  v-model="formData.workplace"
                  placeholder="Enter workplace"
                  id="workplace"
                />
              </div>
            </div>

            <div class="modal-add-candidate-row-labels commons-display-flex">
              <div class="modal-add-candidate-row-label commons-flex-1 commons-flex-center">
                <span
                  class="modal-add-candidate-row-label-text commons-fs-14 commons-fw-500 commons-color-primary"
                  >Time</span
                >
                <span class="modal-add-candidate-row-label-hint commons-fs-14">From</span>
              </div>
              <div class="modal-add-candidate-row-label commons-flex-1 commons-flex-center">
                <span
                  class="modal-add-candidate-row-label-text commons-fs-14 commons-fw-500 commons-color-primary"
                ></span>
                <span class="modal-add-candidate-row-label-hint commons-fs-14">To</span>
              </div>
            </div>
            <div class="modal-add-candidate-row commons-display-flex">
              <div class="modal-add-candidate-row-item commons-flex-1">
                <FormDate v-model="formData.timeFrom" placeholder="dd/MM/yyyy" />
              </div>
              <div class="modal-add-candidate-row-item commons-flex-1">
                <FormDate v-model="formData.timeTo" placeholder="dd/MM/yyyy" />
              </div>
            </div>

            <FormInput
              v-model="formData.jobPosition"
              label="Job position"
              placeholder="Enter job position"
              id="jobPosition"
            />

            <FormTextarea
              v-model="formData.taskDescription"
              label="Task description"
              placeholder="Enter task description"
              :rows="3"
              id="taskDescription"
            />
          </div>
        </div>
      </div>

      <div class="modal-add-candidate-footer commons-display-flex commons-gap-12">
        <button
          class="modal-add-candidate-btn modal-add-candidate-btn-cancel commons-rounded-4 commons-fs-14 commons-fw-500 commons-color-primary commons-bg-white commons-pointer"
          id="cancelModalAddCandidate"
          @click="closeModal"
        >
          Cancel
        </button>
        <button
          class="modal-add-candidate-btn modal-add-candidate-btn-save commons-rounded-4 commons-fs-14 commons-fw-500 commons-color-white commons-bg-primary commons-border-none commons-pointer"
          @click="saveCandidate"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import FormInput from '@/components/form/FormInput.vue'
import FormSelect from '@/components/form/FormSelect.vue'
import FormDate from '@/components/form/FormDate.vue'
import FormTextarea from '@/components/form/FormTextarea.vue'
import FileUpload from '@/components/form/FileUpload.vue'

const emit = defineEmits(['close', 'save'])

const formData = reactive({
  fullName: '',
  dateOfBirth: '',
  gender: '',
  area: '',
  phone: '',
  email: '',
  address: '',
  trainingLevel: '',
  trainingPlace: '',
  major: '',
  applicationDate: '',
  candidateSource: '',
  recommendingStaff: '',
  collaborators: '',
  recentWorkplace: '',
  workplace: '',
  timeFrom: '',
  timeTo: '',
  jobPosition: '',
  taskDescription: '',
  cvFile: null,
})

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
]

const areaOptions = [
  { value: 'hanoi', label: 'Hà Nội' },
  { value: 'hcm', label: 'TP. Hồ Chí Minh' },
  { value: 'danang', label: 'Đà Nẵng' },
  { value: 'haiphong', label: 'Hải Phòng' },
  { value: 'cantho', label: 'Cần Thơ' },
]

const trainingLevelOptions = [
  { value: 'thpt', label: 'THPT' },
  { value: 'trungcap', label: 'Trung cấp' },
  { value: 'caodang', label: 'Cao đẳng' },
  { value: 'daihoc', label: 'Đại học' },
  { value: 'thacsi', label: 'Thạc sĩ' },
  { value: 'tiensi', label: 'Tiến sĩ' },
]

const trainingPlaceOptions = [
  { value: 'hust', label: 'ĐH Bách Khoa Hà Nội' },
  { value: 'neu', label: 'ĐH Kinh tế Quốc dân' },
  { value: 'ftu', label: 'ĐH Ngoại thương' },
  { value: 'fpt', label: 'ĐH FPT' },
  { value: 'uet', label: 'ĐH Công nghệ - ĐHQGHN' },
]

const majorOptions = [
  { value: 'it', label: 'Công nghệ thông tin' },
  { value: 'economics', label: 'Kinh tế' },
  { value: 'business', label: 'Quản trị kinh doanh' },
  { value: 'accounting', label: 'Kế toán' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'hr', label: 'Nhân sự' },
]

const sourceOptions = [
  { value: 'website', label: 'Website' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'referral', label: 'Giới thiệu' },
  { value: 'topcv', label: 'TopCV' },
  { value: 'vietnamworks', label: 'VietnamWorks' },
]

const staffOptions = [
  { value: 'nguyenvana', label: 'Nguyễn Văn A' },
  { value: 'tranthib', label: 'Trần Thị B' },
  { value: 'levanc', label: 'Lê Văn C' },
  { value: 'phamthid', label: 'Phạm Thị D' },
]

const handleFileSelected = (file) => {
  formData.cvFile = file
}

const closeModal = () => {
  emit('close')
}

const saveCandidate = () => {
  if (!formData.fullName) {
    alert('Please enter full name')
    return
  }
  if (!formData.applicationDate) {
    alert('Please enter application date')
    return
  }

  emit('save', { ...formData })
  closeModal()
}
</script>
