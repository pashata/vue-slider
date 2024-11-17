type AddSliderItem = (id: string) => void;
export const ADD_SLIDER_ITEM: InjectionKey<AddSliderItem> = Symbol("addSliderItem");

export const SLIDER_DIRECTION: InjectionKey<string> = Symbol("sliderDirection");
export const ACTIVE_SLIDE_ID: InjectionKey<Ref<string>> = Symbol("activeSlideId");
export const IS_SLIDER_TRANSFORMING: InjectionKey<Ref<boolean>> = Symbol("isSliderTransforming");
