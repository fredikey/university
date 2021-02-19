module.exports = {
	lintOnSave: false,
	css: {
		loaderOptions: {
			sass: {
				prependData:  `
          @import "@/styles/_colors.scss";
          @import "@/styles/_media.scss";
          @import "@/styles/_spacing.scss";
          @import "@/styles/_media.scss";
          @import "@/styles/_typography.scss";
        `
			}
		}
	}
};
