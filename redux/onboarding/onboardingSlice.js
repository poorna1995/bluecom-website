import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onboardingSteps: {
    // produ
  },
  productOnboarding: {
    "general-info": "in-progress",
    media: "disabled",
    variants: "disabled",
    "select-vendor": "disabled",
    inventory: "disabled",
  },
  vendorOnboarding: {
    "general-info": "in-progress",
    products: "disabled",
  },
  bundleOnboarding: {
    "general-info": "in-progress",
    media: "disabled",
    components: "disabled",
  },
  componentOnboarding: {
    "general-info": "in-progress",
    media: "disabled",
    "select-vendor": "disabled",
    inventory: "disabled",
  },
  purchaseOrderOnboarding: {
    "po-details": "in-progress",
    preview: "disabled",
    // "send-po": "disabled",
  },
};

export const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    updateProductOnboardingSteps(state, action) {
      const step = action.payload.step;
      const nextStep = action.payload.nextStep;

      state.productOnboarding = {
        ...state.productOnboarding,
        // ...action.payload,
        [step]: "completed",
        [nextStep]: "in-progress",
      };
    },
    resetProductOnboardingSteps(state, action) {
      state.productOnboarding = {
        "general-info": "in-progress",
        media: "disabled",
        variants: "disabled",
        "select-vendor": "disabled",
        inventory: "disabled",
      };
    },
    resetVendorOnboardingSteps(state, action) {
      state.vendorOnboarding = {
        "general-info": "in-progress",
        products: "disabled",
      };
    },
    updateVendorOnboardingSteps(state, action) {
      const step = action.payload.step;
      const nextStep = action.payload.nextStep;

      state.vendorOnboarding = {
        ...state.vendorOnboarding,
        // ...action.payload,
        [step]: "completed",
        [nextStep]: "in-progress",
      };
    },

    updateBundleOnboardingSteps(state, action) {
      const step = action.payload.step;
      const nextStep = action.payload.nextStep;

      state.bundleOnboarding = {
        ...state.bundleOnboarding,
        // ...action.payload,
        [step]: "completed",
        [nextStep]: "in-progress",
      };
    },

    resetBundleOnboardingSteps(state, action) {
      state.bundleOnboarding = {
        "general-info": "in-progress",
        media: "disabled",
        components: "disabled",
      };
    },

    updateComponentOnboardingSteps(state, action) {
      const step = action.payload.step;
      const nextStep = action.payload.nextStep;

      state.componentOnboarding = {
        ...state.componentOnboarding,
        // ...action.payload,
        [step]: "completed",
        [nextStep]: "in-progress",
      };
    },
    resetComponentOnboardingSteps(state, action) {
      state.componentOnboarding = {
        "general-info": "in-progress",
        media: "disabled",
        inventory: "disabled",
      };
    },

    updatePurchaseOrderOnboardingSteps(state, action) {
      const step = action.payload.step;
      const nextStep = action.payload.nextStep;

      state.purchaseOrderOnboarding = {
        ...state.purchaseOrderOnboarding,
        // ...action.payload,
        [step]: "completed",
        [nextStep]: "in-progress",
      };
    },

    resetPurchaseOrderOnboardingSteps(state, action) {
      state.purchaseOrderOnboarding = {
        "po-details": "in-progress",
        preview: "disabled",
        // "send-po": "disabled",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateProductOnboardingSteps,
  resetProductOnboardingSteps,
  resetVendorOnboardingSteps,
  updateVendorOnboardingSteps,
  resetBundleOnboardingSteps,
  updateBundleOnboardingSteps,
  resetComponentOnboardingSteps,
  updateComponentOnboardingSteps,
  resetPurchaseOrderOnboardingSteps,

  updatePurchaseOrderOnboardingSteps,
} = onboardingSlice.actions;

export default onboardingSlice.reducer;
