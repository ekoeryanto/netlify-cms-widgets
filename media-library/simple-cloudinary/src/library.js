/**
 * Default media library configuration, can be overriden via config.yml.
 */
const defaultConfig = {
  multiple: false,
};

function init({ options = { config: {} }, handleInsert }) {
  const { ...globalConfig } = options.config;
  const baseConfig = { ...defaultConfig, ...globalConfig };

  const mediaLibrary = cloudinary.createMediaLibrary(baseConfig, {
    insertHandler: ({ assets }) => handleInsert(assets.map(u => u.secure_url)),
  });

  return {
    show: ({ config: instanceConfig = {} }) => {
      const config = { ...baseConfig, ...instanceConfig };
      mediaLibrary.show(config);
    },

    hide: mediaLibrary.hide,

    enableStandalone: () => true,
  };
}

const cloudinaryMediaLibrary = { name: 'simple-cloudinary', init };

export default cloudinaryMediaLibrary;
