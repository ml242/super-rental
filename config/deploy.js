module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'testing-ember',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
