

$(document).ready(function() {
    // define as opções do segundo select
    var options = {
      'Código Penal': ['Ameaça', 'Infanticídio', 'Lesão Corporal', 'Lesão Grave', 'Lesão Gravíssima', 'Homicídio simples', 'Homicídio qualificado', 'Feminicídio', 'Homicídio culposo', 'Induzimento, instigação ou auxílio a suicídio ou a automutilação', 'Calunia', 'Difamação', 'Injúria', 'Abandono de incapaz', 'Abandono de incapaz com resultado de lesão grave', 'Abandono de incapaz  com resultado de lesão grave', 'Exposição ou abandono de recém-nascido', 'Exposição ou abandono de recém-nascido com lesão grave', 'Exposição ou abandono de recém-nascido com morte', 'Omissão de socorro', 'Omissão de socorro com lesão grave', 'Omissão de socorro com morte', 'Condicionamento de atendimento médico-hospitalar emergencial', 'Maus tratos', 'Maus tratos com lesão grave', 'Maus tratos com morte', 'Rixa', 'Rixa com morte ou lesão grave', 'Injúria Racial', 'Constrangimento ilegal', 'Perseguição', 'Perseguição majorada', 'Violência psicológica contra a mulher', 'Sequestro e cárcere privado', 'Sequestro e cárcere privado majorado', 'Sequestro e cárcere privado com grave sofrimento físico ou moral', 'Redução a condição análoga à de escravo', 'Redução a condição análoga à de escravo majorado', 'Tráfico de Pessoas', 'Tráfico de pessoas majorado', 'Violação de domicílio', 'Violação de domicílio majorado', 'Violação de correspondência', 'Sonegação ou destruição de correspondência', 'Divulgação de segredo', 'Divulgação de informações sigilosas da Administração Pública', 'Violação do segredo profissional', 'Invasão de dispostitivo informático', 'Furto', 'Furto durante repouso noturno', 'Furto qualificado', 'Furto com emprego de explosivo', 'Furto mediante fraude e por meio de dispositivo eletrônico ou informático', 'Furto de veículo automotor com transporte interestadual', 'Furto de semovente', 'Furto de substância explosiva', 'Furto de coisa comum', 'Roubo', 'Roubo majorado', 'Latrocínio', 'Extorsão', 'Extyorsão mediante sequestro', 'Extrosão indireta']

  ,
      'Lei Maria da Penha': ['Desobediência', 'B.2', 'B.3'],
      'Lei de Drogas': ['Posse', 'Internacional', 'C.3'],
      'Lei 9.099/95': ['D.1', 'D.2', 'D.3'],
      'Lei de Lavagem': ['E.1', 'E.2', 'E.3'],
    };

    // define o manipulador de eventos para o primeiro select
    $('#legislacao').on('change', function() {
      // obtém a opção selecionada no primeiro select
      var selected = $(this).val();
      // obtém o segundo select
      var select = $('#crime');
      // remove todas as opções do segundo select
      select.empty();
      // adiciona as opções relevantes do objeto options com base na seleção do usuário
      if (selected in options) {
        for (var i = 0; i < options[selected].length; i++) {
          var option = $('<option>').val(options[selected][i]).text(options[selected][i]);
          select.append(option);
        }
      }
      // adiciona uma opção padrão
      select.prepend($('<option>').val('').text('Tipo Penal'));
    });
  });


  function show_hide_display()
  {
    if (document.getElementById('suspensao_prescricao_true').checked)
        {
            document.getElementById('display_oculta').style.display='block'

        }
    if (document.getElementById('suspensao_prescricao_false').checked)
        {
            document.getElementById('display_oculta').style.display='none'
            document.getElementById('Dt_inicio_suspensao').value=''
            document.getElementById('Dt_fim_suspensao').value=''

        }

  }

  function show_hide_display_denuncia()
  {
    if (document.getElementById('recebimento_denuncia_true').checked)
        {
            document.getElementById('display_oculta_denuncia').style.display='block'
        }

    if (document.getElementById('recebimento_denuncia_false').checked)
        {
            document.getElementById('display_oculta_denuncia').style.display='none'
            document.getElementById('Dt_Denuncia').value=''
        }
  }


    const date1Input = document.querySelector('#Dt_inicio_suspensao');
    const date2Input = document.querySelector('#Dt_fim_suspensao');

    date2Input.addEventListener('change', function() {
      var date1 = new Date(date1Input.value);
      var date2 = new Date(date2Input.value);

      if (date2 < date1) {
        alert('A data final deve ser posterior à data inicial.');
        date2Input.value = '';
      }
    });





    const data_fato = document.querySelector('#formFileSm');
    const data_denuncia = document.querySelector('#Dt_Denuncia');

    data_denuncia.addEventListener('change', function() {
      var date1 = new Date(data_fato.value);
      var date2 = new Date(data_denuncia.value);

      if (date2 < date1) {
        alert('A data da Denúncia deve ser posterior à data do fato.');
        date2Input.value = '';
      }
    });


    function show_hide_display_data_nascimento_autor()
  {
    if (document.getElementById('Verifica_Idade_do_Autor_do_Fato_True').checked)
        {
            document.getElementById('display_oculta2').style.display='block'
        }

    if (document.getElementById('Verifica_Idade_do_Autor_do_Fato_False').checked)
        {

            document.getElementById('display_oculta2').style.display='none'
            document.getElementById('Data_Verifica_Idade_do_Autor_do_Fato').value=''
        }
  }












