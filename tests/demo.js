module.exports = {
    'Primeiro passo' : function (browser) {
      browser
        .url('http://192.168.0.243/buildmigprojetos/')
        .waitForElementVisible('body', 20000)
        .setValue('input[type=text]', 'admuseall')
        .pause(250)
        .setValue('input[type=password]', 'ampliargestao')
        .pause(250)
        .setValue('select', 'e2desenv/srv_desenv')
        .pause(250)
        .waitForElementVisible('input[type=submit]', 20000)
    },
  
    'Segundo passo: click input' : function (browser) { 
      browser
        .click('input[type=submit]')
        .pause(1000)
        .waitForElementVisible('div[id^=tile-geral-projetos]', 20000)        
    },

    'Terceiro passo: click tile projeto' : function (browser) { 
      browser
        .click('div[id^=tile-geral-projetos]')
        .pause(500)
        .waitForElementVisible('div[id^=tile-projetos-desenho]', 20000)
    },

    'Quarto passo: click tile desenho' : function (browser) { 
      browser
        .click('div[id^=tile-projetos-desenho]')
        .pause(500)
        .waitForElementVisible('input[id^=use-filtro-periodo]', 20000)
    },

    'Quarto passo: setar filtro data' : function (browser) { 
      browser
        .clearValue('input[id^=use-filtro-periodo]')
        .setValue('input[id^=use-filtro-periodo]', 'Todos')        
        .pause(1000)
    },

    'Quarto passo: click pesquisar' : function (browser) { 
      browser
        .click('span[id^=use-searchbutton]')
        .pause(1000)
    },

    'Quinto passo: click novo' : function (browser) { 
      browser
        .click('span[id^=use-newbutton]')
        .pause(1000)
    },

    'Sexto passo: cadastro novo projeto' : function (browser) { 
      browser
        .setValue('input[id^=searchfield-geral-goprojetista]', ['1', browser.Keys.ENTER])
        .pause(1000)        
        .setValue('input[id^=searchfield-projetos-prjresponsaveis]', ['1', browser.Keys.ENTER])
        .pause(1000)        
        .click('span[id^=use-savebutton]')
        .pause(1000)        
        .click('span[id^=button-1014-btnEl]')
        .pause(5000)        
        .end()
    }
  };