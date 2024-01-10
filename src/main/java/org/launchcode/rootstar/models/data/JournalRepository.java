package org.launchcode.rootstar.models.data;

import org.launchcode.rootstar.models.Journal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface JournalRepository extends JpaRepository<Journal, Integer> {
    Optional<Journal> findById(int id);
}
