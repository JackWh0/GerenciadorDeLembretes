package br.com.hallsdepapel.gerenciadordelembretes.repository;

import org.springframework.data.domain.Sort;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.hallsdepapel.gerenciadordelembretes.model.Lembrete;

@Repository
public interface LembreteRepository extends CrudRepository<Lembrete, Long>{
    Iterable<Lembrete> findAll(Sort sort);

}