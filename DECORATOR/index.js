/* 

    Eles adicionam novos comportamentos a classes, funções ou metodos.

 */

    const decoratr = (fn) => {
        return (...params) => {
          console.log("antes da função");
          const resultado = fn.call(this, ...params);
          console.log("depois da função");
          return resultado;
        };
      };
      
      const decorator = (fn) => {
        return function (...params) {
          const resultado = fn.call(this, ...params);
          return JSON.stringify(resultado);
        };
      };
      
      const decoratorLog = (fn, messageLog) => {
        return function (...params) {
          const resultado = fn.call(this, ...params);
          console.log("LOG ->", messageLog);
          return resultado;
        };
      };
      
      function apiEndpoint(requestValue) {
        return { name: "FULADO DE TAL SILVA" };
      }
      
      const endpointDecorator = decorator(apiEndpoint);
      const logDecorator = decoratorLog(endpointDecorator,"ENDPOINT DE BUSCA CHAMADO!");
      console.log(logDecorator());
      