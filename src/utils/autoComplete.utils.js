export const parseAddress = async (addressComponents) => {
  let city = '';
  let country = '';

  for (let i = 0; i < addressComponents.length; i++) {
    const component = addressComponents[i];
    const componentTypes = component.types;

    if (
      componentTypes.includes('locality') ||
      componentTypes.includes('postal_town') ||
      componentTypes.includes('administrative_area_level_3')
    ) {
      city = component.long_name;
    }

    if (componentTypes.includes('country')) {
      country = component.long_name;
    }
  }

  return `${city},${country}`;
};
