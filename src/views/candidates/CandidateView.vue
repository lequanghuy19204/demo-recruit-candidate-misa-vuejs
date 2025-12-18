<template>
  <!-- Main content area -->
  <div class="main-content commons-flex-1 commons-overflow-hidden commons-flex-col">
    <!-- Header Section -->
    <div class="content-header commons-flex-between">
      <h1 class="page-title commons-fs-20 commons-fw-700">Candidates</h1>
      <div class="header-actions commons-display-flex">
        <button
          class="btn-add-candidate commons-flex-center commons-color-white commons-border-none commons-fs-14 commons-fw-500 commons-pointer commons-transition-bg"
        >
          <span class="btn-icon icon-add-candidate"></span>
          <span>Add candidate</span>
        </button>
        <button
          class="btn-dropdown commons-flex-center-all commons-color-white commons-border-none commons-pointer commons-transition-bg"
        >
          <span class="dropdown-icon icon-down"></span>
        </button>
      </div>
    </div>

    <!-- Filter Section -->
    <div class="filter-section commons-flex-between commons-bg-white">
      <div class="search-box commons-flex-center commons-rounded-4 commons-bg-white">
        <span class="icon-ai-search-candidate"></span>
        <input
          type="text"
          placeholder="Quick Search or AI Assistant"
          class="filter-search-input commons-flex-1 commons-border-none commons-outline-none commons-fs-14"
        />
      </div>
      <div class="filter-actions commons-display-flex">
        <button
          class="filter-btn commons-flex-center-all commons-rounded-4 commons-bg-white commons-pointer commons-transition-bg"
        >
          <span class="icon-filter"></span>
        </button>
        <button
          class="filter-btn commons-flex-center-all commons-rounded-4 commons-bg-white commons-pointer commons-transition-bg"
        >
          <span class="icon-export"></span>
        </button>
        <button
          class="filter-btn commons-flex-center-all commons-rounded-4 commons-bg-white commons-pointer commons-transition-bg"
        >
          <span class="icon-interactive-history"></span>
        </button>
        <button
          class="filter-btn commons-flex-center-all commons-rounded-4 commons-bg-white commons-pointer commons-transition-bg"
        >
          <span class="icon-setting-column"></span>
        </button>
      </div>
    </div>

    <!-- Selection Toolbar (hidden by default) -->
    <div class="selection-toolbar commons-flex-between commons-bg-white">
      <div class="selection-info commons-flex-center">
        <span class="selection-count commons-fw-700">0</span>
        <span class="selection-text commons-fs-14">selecting</span>
        <a class="selection-deselect commons-pointer commons-fs-14">Deselect</a>
        <a class="selection-select-all commons-pointer commons-fs-14">Select all on the list</a>
      </div>
      <div class="selection-actions commons-flex-center">
        <button
          class="toolbar-btn commons-flex-center commons-pointer commons-border-none commons-bg-transparent"
        >
          <span class="icon-email"></span>
          <span class="commons-fs-14">Send email</span>
        </button>
        <button
          class="toolbar-btn commons-flex-center commons-pointer commons-border-none commons-bg-transparent"
        >
          <span class="icon-tag"></span>
          <span class="commons-fs-14">Manage tag</span>
        </button>
        <button
          class="toolbar-btn commons-flex-center commons-pointer commons-border-none commons-bg-transparent"
        >
          <span class="icon-task"></span>
          <span class="commons-fs-14">Create task</span>
        </button>
        <button
          class="toolbar-btn commons-flex-center commons-pointer commons-border-none commons-bg-transparent"
        >
          <span class="icon-campaign"></span>
          <span class="commons-fs-14">Add to campaign</span>
        </button>
        <button
          class="toolbar-btn toolbar-btn-delete commons-flex-center commons-pointer commons-border-none commons-bg-transparent"
        >
          <span class="icon-delete" style="width: 20px; height: 20px"></span>
          <span class="commons-fs-14">Delete</span>
        </button>
      </div>
    </div>

    <!-- Table Section -->
    <div class="table-container commons-flex-1 commons-overflow-hidden commons-flex-col">
      <div class="table-wrapper commons-flex-1 commons-overflow-auto">
        <table class="candidates-table commons-w-full commons-fs-14">
          <thead>
            <tr>
              <th class="col-checkbox"><input type="checkbox" /></th>
              <th class="col-fullname commons-fw-700 commons-text-left commons-text-nowrap">
                Full name
              </th>
              <th class="col-email commons-fw-700 commons-text-left commons-text-nowrap">Email</th>
              <th class="col-phone commons-fw-700 commons-text-left commons-text-nowrap">
                Phone number
              </th>
              <th class="col-campaign commons-fw-700 commons-text-left commons-text-nowrap">
                Recruitment campaign
              </th>
              <th class="col-position commons-fw-700 commons-text-left commons-text-nowrap">
                Recruiting position
              </th>
              <th class="col-jobs commons-fw-700 commons-text-left commons-text-nowrap">Jobs</th>
              <th class="col-round commons-fw-700 commons-text-left commons-text-nowrap">
                Recruitment round
              </th>
              <th class="col-review commons-fw-700 commons-text-left commons-text-nowrap">
                Review
              </th>
              <th class="col-appdate commons-fw-700 commons-text-left commons-text-nowrap">
                Application date
              </th>
              <th class="col-source commons-fw-700 commons-text-left commons-text-nowrap">
                Candidate source
              </th>
              <th class="col-training commons-fw-700 commons-text-left commons-text-nowrap">
                Training level
              </th>
              <th class="col-place commons-fw-700 commons-text-left commons-text-nowrap">
                Training place
              </th>
              <th class="col-major commons-fw-700 commons-text-left commons-text-nowrap">Major</th>
              <th class="col-workplace commons-fw-700 commons-text-left commons-text-nowrap">
                Recent Workplace
              </th>
              <th class="col-recommend commons-fw-700 commons-text-left commons-text-nowrap">
                Recommending staff
              </th>
              <th class="col-department commons-fw-700 commons-text-left commons-text-nowrap">
                Using department
              </th>
              <th class="col-compat commons-fw-700 commons-text-left commons-text-nowrap">
                Compatibility level
              </th>
              <th class="col-area commons-fw-700 commons-text-left commons-text-nowrap">Area</th>
              <th class="col-referral commons-fw-700 commons-text-left commons-text-nowrap">
                Referral
              </th>
              <th class="col-receipt commons-fw-700 commons-text-left commons-text-nowrap">
                Receipt information
              </th>
              <th class="col-talent commons-fw-700 commons-text-left commons-text-nowrap">
                In talent pool
              </th>
              <th class="col-portal commons-fw-700 commons-text-left commons-text-nowrap">
                Candidate portal account
              </th>
              <th class="col-tag commons-fw-700 commons-text-left commons-text-nowrap">Tag</th>
              <th class="col-status commons-fw-700 commons-text-left commons-text-nowrap">
                Status
              </th>
              <th class="col-sex commons-fw-700 commons-text-left commons-text-nowrap">Sex</th>
              <th class="col-dob commons-fw-700 commons-text-left commons-text-nowrap">
                Date of birth
              </th>
              <th class="col-address commons-fw-700 commons-text-left commons-text-nowrap">
                Address
              </th>
              <th class="col-reason commons-fw-700 commons-text-left commons-text-nowrap">
                Reason
              </th>
              <th class="col-collab commons-fw-700 commons-text-left commons-text-nowrap">
                Collaborators
              </th>
              <th class="col-receiptdate commons-fw-700 commons-text-left commons-text-nowrap">
                Receipt date
              </th>
              <th class="col-offer commons-fw-700 commons-text-left commons-text-nowrap">
                Job offer status
              </th>
              <th class="col-actions"></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>

    <!-- Pagination Section -->
    <div class="pagination-section commons-flex-between">
      <div class="total-records commons-fs-14">Total: <strong>0</strong> record</div>
      <div class="pagination-controls commons-flex-center">
        <span class="records-label commons-fs-14">Number of records/page</span>
        <select class="records-select commons-rounded-4 commons-fs-14 commons-pointer">
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <span class="page-info commons-fs-14">1 - 2 record</span>
        <button
          class="page-btn prev commons-border-none commons-flex-center-all commons-fs-16"
          disabled
        >
          <div class="icon-left"></div>
        </button>
        <button class="page-btn next commons-border-none commons-flex-center-all commons-fs-16">
          <div class="icon-right"></div>
        </button>
      </div>
    </div>
  </div>
</template>
