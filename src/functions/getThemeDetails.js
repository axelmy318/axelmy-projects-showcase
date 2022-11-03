import { themesOptions } from "../assets/global/Theme-variable";

const getThemeDetails = theme => themesOptions.find(options => options.name === theme)

export default getThemeDetails