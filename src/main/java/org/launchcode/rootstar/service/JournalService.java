package org.launchcode.rootstar.service;

import org.launchcode.rootstar.models.Journal;

import org.launchcode.rootstar.models.data.JournalRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JournalService {

    private final JournalRepository journalRepository;

    @Autowired
    public JournalService(JournalRepository journalRepository) {
        this.journalRepository = journalRepository;
    }

    // CRUD operations for Journal class

    // CREATE
    public Journal addJournal(Journal journal) {
        return journalRepository.save(journal);
    }

    // READ
    public Optional<Journal> getJournalById(int id) {
        return journalRepository.findById(id);
    }

    public List<Journal> getAllJournal() {
        return journalRepository.findAll();
    }
}


