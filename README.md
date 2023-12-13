### Prerequsite

- Docker

### Instruction

`docker-compose up`

### API

## URL

http://localhost:8089


## Postman collection

<details>
<summary>Collection</summary>

```{
	"info": {
		"_postman_id": "60d4eac6-e77f-4f2b-bae8-dad1cd2ad0e9",
		"name": "Robin hood test",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "6080428"
	},
	"item": [
		{
			"name": "Interview",
			"item": [
				{
					"name": "Get",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{url}}/api/interview",
							"host": [
								"{{url}}"
							],
							"path": [
								"api",
								"interview"
							]
						}
					},
					"response": []
				},
				{
					"name": "Create",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"title\": \"TEST\",\r\n    \"description\": \"TEST description\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{url}}/api/interview",
							"host": [
								"{{url}}"
							],
							"path": [
								"api",
								"interview"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"status\": \"ARCHRIVED\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{url}}/api/interview/:id/status",
							"host": [
								"{{url}}"
							],
							"path": [
								"api",
								"interview",
								":id",
								"status"
							],
							"variable": [
								{
									"key": "id",
									"value": "e2590474-2450-47dc-96a1-9686b953e1da"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Changelog",
			"item": [
				{
					"name": "Get",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{url}}/api/changelog?interviewId=e2590474-2450-47dc-96a1-9686b953e1da",
							"host": [
								"{{url}}"
							],
							"path": [
								"api",
								"changelog"
							],
							"query": [
								{
									"key": "interviewId",
									"value": "e2590474-2450-47dc-96a1-9686b953e1da"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Create",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"title\": \"TEST\",\r\n    \"description\": \"TEST description\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{url}}/api/interview",
							"host": [
								"{{url}}"
							],
							"path": [
								"api",
								"interview"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"status\": \"IN_PROGRESS\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{url}}/api/interview/:id/status",
							"host": [
								"{{url}}"
							],
							"path": [
								"api",
								"interview",
								":id",
								"status"
							],
							"variable": [
								{
									"key": "id",
									"value": "e2590474-2450-47dc-96a1-9686b953e1da"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Comment",
			"item": [
				{
					"name": "Get",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{url}}/api/comment?interviewId=e2590474-2450-47dc-96a1-9686b953e1da",
							"host": [
								"{{url}}"
							],
							"path": [
								"api",
								"comment"
							],
							"query": [
								{
									"key": "interviewId",
									"value": "e2590474-2450-47dc-96a1-9686b953e1da"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Create",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"interviewId\": \"e2590474-2450-47dc-96a1-9686b953e1da\",\r\n    \"description\": \"test comment\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{url}}/api/comment",
							"host": [
								"{{url}}"
							],
							"path": [
								"api",
								"comment"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"description\": \"test comment2\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{url}}/api/comment/:id",
							"host": [
								"{{url}}"
							],
							"path": [
								"api",
								"comment",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "56c8115f-284b-423d-9288-272f4532b6de"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "User",
			"item": [
				{
					"name": "Get",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{url}}/api/interview",
							"host": [
								"{{url}}"
							],
							"path": [
								"api",
								"interview"
							]
						}
					},
					"response": []
				},
				{
					"name": "Create",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\": \"Jessie Den\",\r\n    \"password\": \"p@ssw0rd\",\r\n    \"email\": \"jessie.den@example.com\",\r\n    \"username\": \"jessie_den\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{url}}/api/user",
							"host": [
								"{{url}}"
							],
							"path": [
								"api",
								"user"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Auth",
			"item": [
				{
					"name": "Login",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"username\": \"john_doe\",\r\n    \"password\": \"p@ssw0rd\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{url}}/api/auth/login",
							"host": [
								"{{url}}"
							],
							"path": [
								"api",
								"auth",
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "Login 2",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"username\": \"jessie_den\",\r\n    \"password\": \"p@ssw0rd\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{url}}/api/auth/login",
							"host": [
								"{{url}}"
							],
							"path": [
								"api",
								"auth",
								"login"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Health check",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{url}}/health-check",
					"host": [
						"{{url}}"
					],
					"path": [
						"health-check"
					]
				}
			},
			"response": []
		}
	],
	"auth": {
		"type": "bearer",
		"bearer": [
			{
				"key": "token",
				"value": "19e9bfaa-d072-4e2a-8c80-6b88a664f44f",
				"type": "string"
			}
		]
	},
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "url",
			"value": "",
			"type": "string"
		}
	]
}
