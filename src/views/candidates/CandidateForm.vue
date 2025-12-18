<template>
  <!-- Modal Add Candidate -->
  <div
    class="modal-add-candidate-overlay commons-w-full commons-h-full commons-flex-center-all"
    id="modalAddCandidate"
  >
    <div class="modal-add-candidate commons-flex-col commons-rounded-4 commons-bg-white">
      <div class="modal-add-candidate-header commons-flex-between">
        <h2 class="modal-add-candidate-title commons-fw-700">Add candidate</h2>
        <button
          class="modal-add-candidate-close commons-relative commons-flex-center-all commons-border-none commons-pointer"
          id="closeModalAddCandidate"
        ></button>
      </div>

      <div class="modal-add-candidate-body commons-flex-1">
        <div
          class="modal-add-candidate-upload-cv commons-w-full commons-flex-col commons-flex-center-all commons-pointer"
        >
          <span class="modal-add-candidate-upload-cv-text commons-fs-13"
            >Drag and drop or click here to upload CV</span
          >
          <span class="modal-add-candidate-upload-cv-hint commons-fs-13"
            >Accept .pdf and .doc files (Size &lt; 15 Mb)</span
          >
        </div>

        <div class="modal-add-candidate-form commons-display-flex">
          <div
            class="modal-add-candidate-avatar commons-rounded-full commons-flex-center-all commons-flex-shrink-0 commons-pointer"
          >
            <span class="modal-add-candidate-avatar-text commons-fs-13">Photo</span>
          </div>

          <div class="modal-add-candidate-fields commons-flex-1 commons-flex-col">
            <label
              class="modal-add-candidate-label commons-fs-14 commons-fw-500 commons-color-primary commons-flex-center"
            >
              Full name <span class="modal-add-candidate-required">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              class="modal-add-candidate-input commons-w-full commons-fs-14 commons-color-primary commons-outline-none commons-bg-white"
              placeholder="Enter full name"
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
                <div
                  class="modal-add-candidate-date-input commons-w-full commons-flex-center commons-rounded-4 commons-bg-white commons-overflow-hidden"
                >
                  <input
                    id="dateOfBirth"
                    type="date"
                    placeholder="dd/MM/yyyy"
                    class="commons-flex-1 commons-border-none commons-fs-14 commons-color-primary commons-outline-none commons-bg-transparent"
                  />
                  <div
                    class="modal-add-candidate-date-input-icon commons-flex-center-all commons-pointer"
                  >
                    <span class="modal-add-candidate-icon-calendar"></span>
                  </div>
                </div>
              </div>
              <div class="modal-add-candidate-row-item commons-flex-1">
                <div
                  class="modal-add-candidate-select commons-w-full commons-flex-center commons-rounded-4 commons-bg-white commons-pointer commons-relative"
                >
                  <span
                    id="gender"
                    class="modal-add-candidate-select-text commons-flex-1 commons-fs-14"
                    >Choose gender</span
                  >
                  <div class="modal-add-candidate-select-icon commons-flex-center-all">
                    <div class="modal-add-candidate-icon-dropdown"></div>
                  </div>
                  <div class="modal-add-candidate-dropdown-menu">
                    <div class="modal-add-candidate-dropdown-item">Male</div>
                    <div class="modal-add-candidate-dropdown-item">Female</div>
                  </div>
                </div>
              </div>
            </div>

            <label
              class="modal-add-candidate-label commons-fs-14 commons-fw-500 commons-color-primary commons-flex-center"
              >Area</label
            >
            <div class="modal-add-candidate-area-wrapper commons-display-flex">
              <div
                class="modal-add-candidate-area-select commons-flex-1 commons-flex-center commons-bg-white commons-pointer commons-relative"
              >
                <span
                  id="area"
                  class="modal-add-candidate-area-select-text commons-flex-1 commons-fs-14"
                  >Select area</span
                >
                <div class="modal-add-candidate-area-select-icon commons-flex-center-all">
                  <span class="modal-add-candidate-icon-dropdown"></span>
                </div>
                <div class="modal-add-candidate-dropdown-menu">
                  <div class="modal-add-candidate-dropdown-item">Hà Nội</div>
                  <div class="modal-add-candidate-dropdown-item">TP. Hồ Chí Minh</div>
                  <div class="modal-add-candidate-dropdown-item">Đà Nẵng</div>
                  <div class="modal-add-candidate-dropdown-item">Hải Phòng</div>
                  <div class="modal-add-candidate-dropdown-item">Cần Thơ</div>
                </div>
              </div>
              <div class="modal-add-candidate-area-btn commons-flex-center-all commons-pointer">
                <span class="modal-add-candidate-icon-plus"></span>
              </div>
            </div>

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
                <input
                  id="phone"
                  type="text"
                  class="modal-add-candidate-input commons-w-full commons-fs-14 commons-color-primary commons-outline-none commons-bg-white"
                  placeholder="Enter phone number"
                />
              </div>
              <div class="modal-add-candidate-row-item commons-flex-1">
                <input
                  id="email"
                  type="email"
                  class="modal-add-candidate-input commons-w-full commons-fs-14 commons-color-primary commons-outline-none commons-bg-white"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <label
              class="modal-add-candidate-label commons-fs-14 commons-fw-500 commons-color-primary commons-flex-center"
              >Address</label
            >
            <input
              id="address"
              type="text"
              class="modal-add-candidate-input commons-w-full commons-fs-14 commons-color-primary commons-outline-none commons-bg-white"
              placeholder="Enter address"
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
                    <div
                      class="modal-add-candidate-select commons-flex-1 commons-flex-center commons-rounded-4 commons-bg-white commons-pointer commons-relative"
                    >
                      <span
                        id="trainingLevel"
                        class="modal-add-candidate-select-text commons-flex-1 commons-fs-14"
                        >Please enter training level</span
                      >
                      <div
                        class="modal-add-candidate-education-btn commons-flex-center-all commons-pointer"
                      >
                        <span class="modal-add-candidate-icon-plus"></span>
                      </div>
                      <div class="modal-add-candidate-select-icon commons-flex-center-all">
                        <span class="modal-add-candidate-icon-dropdown"></span>
                      </div>
                      <div class="modal-add-candidate-dropdown-menu">
                        <div class="modal-add-candidate-dropdown-item">THPT</div>
                        <div class="modal-add-candidate-dropdown-item">Trung cấp</div>
                        <div class="modal-add-candidate-dropdown-item">Cao đẳng</div>
                        <div class="modal-add-candidate-dropdown-item">Đại học</div>
                        <div class="modal-add-candidate-dropdown-item">Thạc sĩ</div>
                        <div class="modal-add-candidate-dropdown-item">Tiến sĩ</div>
                      </div>
                    </div>
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
                    <div
                      class="modal-add-candidate-select commons-flex-1 commons-flex-center commons-rounded-4 commons-bg-white commons-pointer commons-relative"
                    >
                      <span
                        id="trainingPlace"
                        class="modal-add-candidate-select-text commons-flex-1 commons-fs-14"
                        >Please enter training place</span
                      >
                      <div
                        class="modal-add-candidate-education-btn commons-flex-center-all commons-pointer"
                      >
                        <span class="modal-add-candidate-icon-plus"></span>
                      </div>
                      <div class="modal-add-candidate-select-icon commons-flex-center-all">
                        <span class="modal-add-candidate-icon-dropdown"></span>
                      </div>
                      <div class="modal-add-candidate-dropdown-menu">
                        <div class="modal-add-candidate-dropdown-item">ĐH Bách Khoa Hà Nội</div>
                        <div class="modal-add-candidate-dropdown-item">ĐH Kinh tế Quốc dân</div>
                        <div class="modal-add-candidate-dropdown-item">ĐH Ngoại thương</div>
                        <div class="modal-add-candidate-dropdown-item">ĐH FPT</div>
                        <div class="modal-add-candidate-dropdown-item">ĐH Công nghệ - ĐHQGHN</div>
                      </div>
                    </div>
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
                    <div
                      class="modal-add-candidate-select commons-flex-1 commons-flex-center commons-rounded-4 commons-bg-white commons-pointer commons-relative"
                    >
                      <span
                        id="major"
                        class="modal-add-candidate-select-text commons-flex-1 commons-fs-14"
                        >Enter major</span
                      >
                      <div
                        class="modal-add-candidate-education-btn commons-flex-center-all commons-pointer"
                      >
                        <span class="modal-add-candidate-icon-plus"></span>
                      </div>
                      <div class="modal-add-candidate-select-icon commons-flex-center-all">
                        <span class="modal-add-candidate-icon-dropdown"></span>
                      </div>
                      <div class="modal-add-candidate-dropdown-menu">
                        <div class="modal-add-candidate-dropdown-item">Công nghệ thông tin</div>
                        <div class="modal-add-candidate-dropdown-item">Kinh tế</div>
                        <div class="modal-add-candidate-dropdown-item">Quản trị kinh doanh</div>
                        <div class="modal-add-candidate-dropdown-item">Kế toán</div>
                        <div class="modal-add-candidate-dropdown-item">Marketing</div>
                        <div class="modal-add-candidate-dropdown-item">Nhân sự</div>
                      </div>
                    </div>
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
                <div
                  class="modal-add-candidate-date-input commons-w-full commons-flex-center commons-rounded-4 commons-bg-white commons-overflow-hidden"
                >
                  <input
                    id="applicationDate"
                    type="date"
                    placeholder="dd/MM/yyyy"
                    class="commons-flex-1 commons-border-none commons-fs-14 commons-color-primary commons-outline-none commons-bg-transparent"
                  />
                  <div
                    class="modal-add-candidate-date-input-icon commons-flex-center-all commons-pointer"
                  >
                    <span class="modal-add-candidate-icon-calendar"></span>
                  </div>
                </div>
              </div>
              <div class="modal-add-candidate-row-item commons-flex-1">
                <div
                  class="modal-add-candidate-select commons-w-full commons-flex-center commons-rounded-4 commons-bg-white commons-pointer commons-relative"
                >
                  <span
                    id="candidateSource"
                    class="modal-add-candidate-select-text commons-flex-1 commons-fs-14"
                    >Select source</span
                  >
                  <div class="modal-add-candidate-select-icon commons-flex-center-all">
                    <span class="modal-add-candidate-icon-dropdown"></span>
                  </div>
                  <div class="modal-add-candidate-dropdown-menu">
                    <div class="modal-add-candidate-dropdown-item">Website</div>
                    <div class="modal-add-candidate-dropdown-item">LinkedIn</div>
                    <div class="modal-add-candidate-dropdown-item">Facebook</div>
                    <div class="modal-add-candidate-dropdown-item">Giới thiệu</div>
                    <div class="modal-add-candidate-dropdown-item">TopCV</div>
                    <div class="modal-add-candidate-dropdown-item">VietnamWorks</div>
                  </div>
                </div>
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
                <div
                  class="modal-add-candidate-select commons-w-full commons-flex-center commons-rounded-4 commons-bg-white commons-pointer commons-relative"
                >
                  <span
                    id="recommendingStaff"
                    class="modal-add-candidate-select-text commons-flex-1 commons-fs-14"
                    >Select staff</span
                  >
                  <div class="modal-add-candidate-select-icon commons-flex-center-all">
                    <span class="modal-add-candidate-icon-dropdown"></span>
                  </div>
                  <div class="modal-add-candidate-dropdown-menu">
                    <div class="modal-add-candidate-dropdown-item">Nguyễn Văn A</div>
                    <div class="modal-add-candidate-dropdown-item">Trần Thị B</div>
                    <div class="modal-add-candidate-dropdown-item">Lê Văn C</div>
                    <div class="modal-add-candidate-dropdown-item">Phạm Thị D</div>
                  </div>
                </div>
              </div>
              <div class="modal-add-candidate-row-item commons-flex-1">
                <div
                  class="modal-add-candidate-select commons-w-full commons-flex-center commons-rounded-4 commons-bg-white commons-pointer commons-relative"
                >
                  <span
                    id="collaborators"
                    class="modal-add-candidate-select-text commons-flex-1 commons-fs-14"
                    >Select collaborators</span
                  >
                  <div class="modal-add-candidate-select-icon commons-flex-center-all">
                    <span class="modal-add-candidate-icon-dropdown"></span>
                  </div>
                  <div class="modal-add-candidate-dropdown-menu">
                    <div class="modal-add-candidate-dropdown-item">Nguyễn Văn A</div>
                    <div class="modal-add-candidate-dropdown-item">Trần Thị B</div>
                    <div class="modal-add-candidate-dropdown-item">Lê Văn C</div>
                    <div class="modal-add-candidate-dropdown-item">Phạm Thị D</div>
                  </div>
                </div>
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
                <input
                  id="recentWorkplace"
                  type="text"
                  class="modal-add-candidate-input commons-w-full commons-fs-14 commons-color-primary commons-outline-none commons-bg-white"
                  placeholder="Enter recent workplace"
                />
              </div>
              <div class="modal-add-candidate-row-item commons-flex-1">
                <input
                  id="workplace"
                  type="text"
                  class="modal-add-candidate-input commons-w-full commons-fs-14 commons-color-primary commons-outline-none commons-bg-white"
                  placeholder="Enter workplace"
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
                <div
                  class="modal-add-candidate-date-input commons-w-full commons-flex-center commons-rounded-4 commons-bg-white commons-overflow-hidden"
                >
                  <input
                    id="timeFrom"
                    type="date"
                    placeholder="dd/MM/yyyy"
                    class="commons-flex-1 commons-border-none commons-fs-14 commons-color-primary commons-outline-none commons-bg-transparent"
                  />
                  <div
                    class="modal-add-candidate-date-input-icon commons-flex-center-all commons-pointer"
                  >
                    <span class="modal-add-candidate-icon-calendar"></span>
                  </div>
                </div>
              </div>
              <div class="modal-add-candidate-row-item commons-flex-1">
                <div
                  class="modal-add-candidate-date-input commons-w-full commons-flex-center commons-rounded-4 commons-bg-white commons-overflow-hidden"
                >
                  <input
                    id="timeTo"
                    type="date"
                    placeholder="dd/MM/yyyy"
                    class="commons-flex-1 commons-border-none commons-fs-14 commons-color-primary commons-outline-none commons-bg-transparent"
                  />
                  <div
                    class="modal-add-candidate-date-input-icon commons-flex-center-all commons-pointer"
                  >
                    <span class="modal-add-candidate-icon-calendar"></span>
                  </div>
                </div>
              </div>
            </div>

            <label
              class="modal-add-candidate-label commons-fs-14 commons-fw-500 commons-color-primary commons-flex-center"
              >Job position</label
            >
            <input
              id="jobPosition"
              type="text"
              class="modal-add-candidate-input commons-w-full commons-fs-14 commons-color-primary commons-outline-none commons-bg-white"
              placeholder="Enter job position"
            />

            <label
              class="modal-add-candidate-label commons-fs-14 commons-fw-500 commons-color-primary commons-flex-center"
              >Task description</label
            >
            <textarea
              id="taskDescription"
              class="modal-add-candidate-textarea commons-w-full commons-fs-14 commons-color-primary commons-outline-none commons-bg-white"
              placeholder="Enter task description"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="modal-add-candidate-footer commons-display-flex commons-gap-12">
        <button
          class="modal-add-candidate-btn modal-add-candidate-btn-cancel commons-rounded-4 commons-fs-14 commons-fw-500 commons-color-primary commons-bg-white commons-pointer"
          id="cancelModalAddCandidate"
        >
          Cancel
        </button>
        <button
          class="modal-add-candidate-btn modal-add-candidate-btn-save commons-rounded-4 commons-fs-14 commons-fw-500 commons-color-white commons-bg-primary commons-border-none commons-pointer"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>
