# Integration des Logs & Monitoring dans un pipeline CI/CD

## Description
Ce projet vise à intégrer le logging et le monitoring dans un pipeline CI/CD pour le déploiement d'une API REST dans le domaine de la santé/suivi sportif. L'objectif est d'automatiser le déploiement et la supervision tout en fournissant des métriques et des alertes en temps réel.

## Contenu du dépôt
- **infra/** : Fichiers de configuration pour Terraform.
- **ansible/** : Inventaire et playbooks pour Ansible.
- **monitoring/** : Dashboards Grafana, règles Prometheus, et configurations Loki/Filebeat.
- **api/** : Code source complet de l'API.
- **.github/** : Workflows GitHub Actions pour CI/CD.
- **release.sh** : Script pour faciliter les releases.
- **rapport.md** : Documentation détaillée du projet.

## Objectifs
- Déployer l'API avec Terraform et Ansible.
- Intégrer des outils de logs et de monitoring (Prometheus + Grafana).
- Automatiser la vérification de l'état de l'API et des métriques dans le pipeline CI/CD.
- Configurer des alertes sur des seuils critiques.

## Prérequis
- Compte GCP pour le provisioning.
- Accès à GitHub pour le CI/CD.
- Familiarité avec Node.js, Terraform, et Ansible.

## Installation
1. Cloner le dépôt :
   ```bash
   git clone https://github.com/HichOps/integration-logs-monitoring-cicd.git
   ```
2. Suivre les étapes documentées dans `rapport.md` pour le déploiement.

## Licence
Ce projet est sous licence [MIT](LICENSE).