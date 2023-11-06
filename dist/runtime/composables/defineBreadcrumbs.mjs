import { useBreadcrumbs } from "./useBreadcrumbs.mjs";
import { useItems } from "./useItems.mjs";
const breads = useBreadcrumbs();
export const defineBreadcrumbs = (ctx, name) => {
  if (!name) {
    name = useRoute().name;
  }
  const data = useItems();
  let result = [];
  let item = null;
  let prevItem = null;
  while (name) {
    prevItem = item;
    item = findItem(name, data);
    if (item && item.name === prevItem?.name) {
      let msg = 'You have registered breadcrumbs with endless loop, that will not work. Please check "name" and "parent" values on registered breadcrumbs';
      throw new Error(msg);
    }
    if (item)
      result.push(makeBreadcrumb(item, ctx));
    name = item?.parent ? item?.parent : null;
  }
  breads.value = result.reverse();
};
const findItem = (name, data) => {
  if (!name)
    return null;
  let item = data[name];
  return item ? item : null;
};
const makeBreadcrumb = (item, ctx) => {
  return { ...item.link(ctx), ctx };
};
