.DEFAULT_GOAL := help

IMAGE_NAME = node-graphql
PROJECT_NAME = graphql
CONTAINER_NAME = server

start:## start docker containers
	make down
	make up

up: ## up docker containers
	docker-compose -p $(PROJECT_NAME) up -d
	docker-compose -p $(PROJECT_NAME) ps

stop: ## Stops and removes the docker containers, use me with: make down
	docker-compose -p $(PROJECT_NAME) stop

down: ## Stops and removes the docker containers, use me with: make down
	docker-compose -p $(PROJECT_NAME) down

restart: ## Restart all containers, use me with: make restart
	docker-compose -p $(PROJECT_NAME) restart
	docker-compose -p $(PROJECT_NAME) ps

status: ## Show containers status, use me with: make status
	docker-compose -p $(PROJECT_NAME) ps

ssh: ## Connect to container for ssh protocol
	docker-compose exec $(CONTAINER_NAME) bash

log: ## Show container logs
	@docker-compose -p $(PROJECT_NAME) logs -f

install: ## Install project
	docker run -it --rm -v $(PWD)/app:/app -w /app node:8.11.1-slim yarn install

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'
