CREATE TABLE nome_esquema.nome_tabela (
    id_tabela       SERIAL       PRIMARY KEY,                
    coluna1         VARCHAR(100) NOT NULL,                   
    coluna2         INTEGER      CHECK (coluna2 > 0),        
    coluna3         NUMERIC(10,2) DEFAULT 0.00,              
    data_criacao    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,  
    ativo           BOOLEAN      DEFAULT TRUE,               
    CONSTRAINT uk_nome_tabela_coluna1 UNIQUE (coluna1)       
);
