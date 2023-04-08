from app import app
from flask import render_template, request
from app.util import *

legislacao = ['Código Penal', 'Lei Maria da Penha', 'Lei de Drogas', 'Lei 9.099 / 95', 'Lei de Lavagem']


@app.route('/')
def index():
    return render_template('public/prescricao.html', legislacao=legislacao)


@app.route('/faq')
def faq():
    return render_template("public/faq.html")


@app.route('/contato')
def contato():
    return render_template("public/contato.html")


@app.route('/documentacao')
def documentacao():
    return render_template("public/documentacao.html")


@app.route('/prescricao', methods=["GET", "POST"])
def prescricao():
    if request.method == "GET":

        return render_template('public/prescricao.html', legislacao=legislacao)

    elif request.method == "POST":
        dados_prescricao = {
            'processo': request.form['processo'],
            'reu': request.form['reu'],
            'data_fato': request.form['data_fato'],
            'legislacao': request.form['legislacao'],
            'crime': request.form['crime'],
            'recebimento_denuncia_bool': request.form['recebimento_denuncia_bool'],
            'Dt_Denuncia': request.form['Dt_Denuncia'],
            'suspensao_prescricao_bool': request.form['suspensao_prescricao_bool'],
            'Dt_inicio_suspensao': request.form['Dt_inicio_suspensao'],
            'Dt_fim_suspensao': request.form['Dt_fim_suspensao'],
            'verificacao_idade': request.form['Verifica_Idade_do_Autor'],
            'idade_autor': request.form['Data_Verifica_Idade_do_Autor_do_Fato']
        }

        resultado, parecer = analisa_prescricao(dados_prescricao)

        # tipo_penal = ['Ameaca', "Roubo", "Furto", "Lesao", "Homicídio"]

        # return render_template('prescricao.html', legislacao=legislacao, tipo_penal=tipo_penal)

        print(dados_prescricao)

        #seta variáveis menor de vinte e um anos e maior de setenta anos - usa fórmula e estrutura ternária para converter True em Sim e False em Nao
        if dados_prescricao['verificacao_idade'] == "True":
            menor_de_vinte_um = "Sim" if calcula_se_e_menor_21_tempo_crime(dados_prescricao['idade_autor'],
                                                                           dados_prescricao[
                                                                               'data_fato']) == "True" else "Não"
            maior_de_setenta = "Sim" if calcula_se_e_maior_de_setenta_anos(
                dados_prescricao['idade_autor']) == "True" else "Não"

        else:
            menor_de_vinte_um = '-'
            maior_de_setenta = '-'

        for chave, valor in dados_prescricao.items():
            if valor == "True":
                dados_prescricao[chave] = "Sim"
            elif valor == "False":
                dados_prescricao[chave] = "Não"

        print(dados_prescricao)


        return render_template('public/prescricao_resultado.html', dados_prescricao=dados_prescricao,
                               resultado=resultado,
                               corrige_ordem_da_data_str=corrige_ordem_da_data_str,
                               maior_de_setenta = maior_de_setenta,
                               menor_de_vinte_um = menor_de_vinte_um
                               )
